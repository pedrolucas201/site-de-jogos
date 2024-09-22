import React, { useState } from 'react';
import { auth, firestore } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Registro: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const isUsernameTaken = async (username: string) => {
    const usersRef = doc(firestore, 'users', username);
    const userDoc = await getDoc(usersRef);
    return userDoc.exists();
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica o nome de usuário
    if (!username.trim()) {
      setError('O nome de usuário não pode ser vazio.');
      return;
    }
    
    if (await isUsernameTaken(username)) {
      setError('Esse nome de usuário já está em uso.');
      return;
    }

    // Verifica o e-mail
    if (!isEmailValid(email)) {
      setError('O e-mail fornecido não é válido.');
      return;
    }

    // Verifica a senha
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Cria um documento para o usuário no Firestore
      const userRef = doc(firestore, 'users', user.uid);
      await setDoc(userRef, {
        displayName: username,
        games: [] // Inicia com um array vazio para armazenar jogos jogados
      });

      // Atualiza o perfil do usuário
      await updateProfile(user, { displayName: username });

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
