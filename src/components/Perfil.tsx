import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import '../styles/styles.css'; // Certifique-se de ter o CSS importado

const Perfil: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [gamesPlayed, setGamesPlayed] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) return;

      // Buscar dados do usuário
      const userRef = doc(firestore, 'users', userId);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const data = userDoc.data();
        setScore(data.score || 0);
      }

      // Buscar jogos jogados
      const gamesRef = collection(firestore, 'users', userId, 'games');
      const gamesSnapshot = await getDocs(gamesRef);
      const gamesArray = gamesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setGamesPlayed(gamesArray);
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Bem-vindo, {auth.currentUser?.displayName || 'Usuário'}!</h1>
      </div>
      <div className="profile-content">
        <p>Veja suas conquistas e progresso aqui!</p>
        <div className="score-section">
          <h2>Score: {score}</h2>
        </div>
        <div className="games-played">
          <h3>Jogos jogados:</h3>
          {gamesPlayed.length > 0 ? (
            <ul>
              {gamesPlayed.map((game) => (
                <li key={game.id} className="game-item">
                  <strong>Nome:</strong> {game.name || "Nome não disponível"}<br />
                  <strong>Tempo jogado:</strong> {game.playtime} minutos
                </li>
              ))}
            </ul>
          ) : (
            <p>Você ainda não jogou nenhum jogo.</p>
          )}
        </div>
      </div>
      <button onClick={() => auth.signOut()} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Perfil;
