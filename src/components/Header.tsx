// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className={theme === 'light' ? 'light-header' : 'dark-header'}>
      <h1>Jogue Grátis Online</h1>
      <SearchBar onSearch={handleSearch}/>
      <nav>
        <ul>
          <li><Link to="/category/acao">Ação</Link></li>
          <li><Link to="/category/aventura">Aventura</Link></li>
          <li><Link to="/category/puzzle">Puzzle</Link></li>
          <li><Link to="/category/simulacao">Simulação</Link></li>
          <li><Link to="/category/casual">Casual</Link></li>
          <li><Link to="/category/shooter">Atirador</Link></li>
          <li><Link to="/category/mobile">Mobile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
function setSearchQuery(arg0: string) {
    throw new Error('Function not implemented.');
}

