import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    // Verifica se o e-mail é válido
    if (!isEmailValid(email)) {
      setError('O e-mail fornecido não é válido.');
      return;
    }

    // Verifica se a senha não está vazia
    if (password.trim() === '') {
      setError('A senha não pode estar vazia.');
      return;
    }

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in user:', userCredential.user);
      setSuccess(true);
      setError(null);

      navigate('/'); // Redireciona para a home após o login
    } catch (error: any) {
      console.error('Error during login:', error);
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Login bem-sucedido!</div>}
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
