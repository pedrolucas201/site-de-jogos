import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { games } from '../data/gamesData';
import SearchBar from '../components/SearchBar';
import { Helmet } from 'react-helmet';
import { auth } from '../firebaseConfig'; // Importando Firebase auth
import { FaUserCircle } from 'react-icons/fa'; // Ícone de perfil

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null); // Estado para armazenar o usuário logado

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery)
  );

  // Verifica se o usuário está logado
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

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
            {/* Mostrar apenas se o usuário NÃO estiver logado */}
            {!user && (
              <>
                <li>
                  <Link to="/login" className="neon-button">Login</Link> {/* Link para Login */}
                </li>
                <li>
                  <Link to="/register" className="neon-button">Registrar</Link> {/* Link para Registro */}
                </li>
              </>
            )}
            {/* Ícone de perfil, visível apenas quando o usuário está logado */}
            {user && (
              <div className="profile-container">
                <Link to="/perfil">
                  <FaUserCircle className="profile-icon" /> {/* Ícone de perfil */}
                </Link>
              </div>
            )}
          </ul>
        </nav>
      </header>
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
