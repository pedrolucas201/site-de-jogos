import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Certifique-se de que está importando auth corretamente
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Adicione updateProfile para o nome de usuário
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Registro: React.FC = () => {
  const [username, setUsername] = useState<string>(''); // Novo campo para o nome de usuário
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Adiciona o nome de usuário no perfil do Firebase
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: username });
      }

      setSuccess(true);
      setError(null); // Limpa o erro caso o registro seja bem-sucedido
      navigate('/'); // Redireciona para a home após o registro
    } catch (err: any) {
      setError(err.message); // Mostra o erro, se houver
      setSuccess(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Registrar</h1>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Registro bem-sucedido!</div>}
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
