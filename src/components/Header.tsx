import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onSearch: (query: string) => void; // Adicionando prop para onSearch
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onSearch }) => {
  return (
    <header className={theme === 'light' ? 'light-header' : 'dark-header'}>
      <h1>Press 2 Play</h1>
      <SearchBar onSearch={onSearch} /> {/* Passando a função onSearch */}
      <nav>
        <ul>
          <li><Link to="/category/acao">Ação</Link></li>
          <li><Link to="/category/aventura">Aventura</Link></li>
          <li><Link to="/category/puzzle">Puzzle</Link></li>
          <li><Link to="/category/simulacao">Simulação</Link></li>
          <li><Link to="/category/casual">Casual</Link></li>
          <li><Link to="/category/shooter">Atirador</Link></li>
          <li><Link to="/category/mobile">Mobile</Link></li>
          <li><Link to="/category/racing">Corrida</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
