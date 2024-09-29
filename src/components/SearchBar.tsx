import React, { useState, useCallback } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Atualizar a query ao digitar
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Prevenir buscas repetidas
  const handleSearch = useCallback(() => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  }, [query, onSearch]);

  // Acionar a busca ao pressionar Enter
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for games..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <button 
        onClick={handleSearch}
        disabled={query.trim() === ''} // Desativa o botão se o input estiver vazio
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
