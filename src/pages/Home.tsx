import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { games } from '../data/gamesData';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [user] = useAuthState(auth);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery)
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container"> {/* Adicione uma classe para o container */}
      <Helmet>
        <meta name="description" content="Encontre os melhores jogos online em nosso site!" />
        <title>Jogue Grátis Online</title>
      </Helmet>
      <Header theme={theme} toggleTheme={toggleTheme} onSearch={handleSearch} /> {/* Passando onSearch */}
      <div className="auth-buttons">
        {!user && (
          <>
            <Link to="/login" className="neon-button">Login</Link>
            <Link to="/register" className="neon-button">Registrar</Link>
          </>
        )}
        {user && (
          <Link to="/perfil" className="neon-button">Perfil</Link>
        )}
      </div>
      <main>
        <section className="games-grid">
          {filteredGames.map(game => (
            <GameCard key={game.id} id={game.id} title={game.title} thumbnail={game.thumbnail} />
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 By: Pedro Gomes</p>
      </footer>
    </div>
  );
};

export default Home;
