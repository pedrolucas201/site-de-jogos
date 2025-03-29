import React, { useState } from 'react';
import GameCard from './GameCard';
import { games } from '../data/gamesData';
import BackToHomeButton from './BackToHomeButton';
import SearchBar from './SearchBar'; // Certifique-se de importar a SearchBar

interface GameListProps {
  category: string;
}

const GameList: React.FC<GameListProps> = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Função para atualizar a busca
  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase()); // Armazenar a busca em minúsculas para comparação
  };

  // Filtrar jogos pela categoria e pela busca
  const filteredGames = games.filter(game => 
    game.category.includes(category) && game.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="games-list">
      <SearchBar onSearch={handleSearch} /> {/* Adicione a SearchBar aqui */}
      <div className="games-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map(({ id, title, thumbnail }) => (
            <GameCard
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
            />
          ))
        ) : (
          <p>Não há jogos disponíveis para essa categoria.</p>
        )}
        <BackToHomeButton />
      </div>
    </div>
  );
};

export default GameList;
