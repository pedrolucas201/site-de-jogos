import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig'; // Importa o auth do Firebase
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import '../styles/styles.css'; // Adicionando um arquivo de estilo separado

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState<string | null>(null); // Para o nome do usuário

  // Obtém o nome de usuário do Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  // Função para deslogar o usuário
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/'); // Redireciona para a home após o logout
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Bem-vindo, {displayName || 'Usuário'}!</h1>
      </div>
      <div className="profile-content">
        <p>Veja suas conquistas e progresso aqui!</p>
        <p>Conquistas: Nenhuma por enquanto. Jogue para conquistar!</p>
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Perfil;
