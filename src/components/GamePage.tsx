import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { games } from '../data/gamesData'; 
import BackToHomeButton from './BackToHomeButton';
import { auth } from '../firebaseConfig';
import { updateUserScore } from '../services/userService';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find(g => g.id === gameId);

  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (auth.currentUser && game) {
      // Exemplo de atualização de pontuação
      const newScore = score + 10;
      setScore(newScore);
      updateUserScore(auth.currentUser.uid, newScore);
    }
  }, [score, game]);

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
    </div>
  );
};

export default GamePage;
