import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { games } from '../data/gamesData';
import SearchBar from '../components/SearchBar';
import { Helmet } from 'react-helmet';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user] = useAuthState(auth); // Verifica o estado de autenticação

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Helmet>
        <meta name="description" content="Encontre os melhores jogos online em nosso site!" />
        <title>PlayBlast</title>
      </Helmet>
      <header>
        <h1>Bem-vindo ao PlayBlast</h1>
        <SearchBar onSearch={handleSearch} /> {/* Barra de busca */}
        <nav>
          <ul>
            <li>
              <Link to="/category/acao">Ação</Link>
            </li>
            <li>
              <Link to="/category/aventura">Aventura</Link>
            </li>
            <li>
              <Link to="/category/puzzle">Puzzle</Link>
            </li>
            <li>
              <Link to="/category/simulacao">Simulação</Link>
            </li>
            <li>
              <Link to="/category/casual">Casual</Link>
            </li>
            <li>
              <Link to="/category/shooter">Atirador</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="auth-buttons">
        {!user && (
          <>
            <Link to="/login" className="neon-button">
              Login
            </Link>
            <Link to="/register" className="neon-button">
              Registrar
            </Link>
          </>
        )}
        {user && (
          <Link to="/perfil" className="neon-button">
            Perfil
          </Link>
        )}
      </div>
      <main>
        <section className="games-grid">
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              thumbnail={game.thumbnail}
            />
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
