import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { games } from "../data/gamesData";
import BackToHomeButton from "./BackToHomeButton";
import { auth, firestore } from "../firebaseConfig";
import { updateUserScore } from "../services/userService";
import { doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find((g) => g.id === gameId);
  const [score, setScore] = useState<number>(0);
  const [playtime, setPlaytime] = useState<number>(0);

  useEffect(() => {
    if (!game || !auth.currentUser || !gameId) return;

    const userId = auth.currentUser.uid;
    const gameRef = doc(firestore, "users", userId, "games", gameId);

    // Função para registrar o tempo de jogo
    const recordPlaytime = async () => {
      if (!userId || !gameId) {
        console.error('User ID ou Game ID é indefinido.');
        return;
      }

      try {
        const docSnapshot = await getDoc(gameRef);
        const currentTime = docSnapshot.exists() ? docSnapshot.data()?.playtime || 0 : 0;

        console.log("Gravando jogo:", game.title); // Verifique o título do jogo

        await setDoc(gameRef, {
          name: game.title || "Título desconhecido", // Adicione um valor padrão para evitar problemas
          playtime: currentTime + 1
        }, { merge: true });                
      } catch (error) {
        console.error('Erro ao atualizar o tempo de jogo:', error);
      }
    };

    // Atualiza o tempo de jogo a cada minuto
    const interval = setInterval(() => {
      recordPlaytime();
      setScore((prevScore) => {
        const newScore = prevScore + 10;
        updateUserScore(userId, newScore);
        return newScore;
      });
    }, 60000);

    const unsubscribe = onSnapshot(gameRef, (doc) => {
      if (doc.exists()) {
        setPlaytime(doc.data()?.playtime || 0);
      }
    });

    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, [game, gameId]);

  if (!game) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Helmet>
        <title>Jogando: {game.title}</title>
      </Helmet>
      <iframe
        src={game.iframeUrl}
        width="100%"
        height="100%"
        scrolling="none"
        frameBorder="0"
        allowFullScreen
        title={`Jogo: ${game.title}`}
      ></iframe>
      <BackToHomeButton />
      <div>Tempo jogado: {playtime} minutos</div>
      <div>Pontuação atual: {score}</div>
    </div>
  );
};

export default GamePage;
