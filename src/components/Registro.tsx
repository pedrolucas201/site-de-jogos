import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Registro: React.FC = () => {
  const [username, setUsername] = useState<string>('');
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

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: username });
      }

      setSuccess(true);
      setError(null);

      navigate('/'); // Redireciona para a home após o registro
    } catch (err: any) {
      setError(err.message);
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
