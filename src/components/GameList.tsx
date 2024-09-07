import React from 'react';
import GameCard from './GameCard';
import { games } from '../data/gamesData';
import BackToHomeButton from './BackToHomeButton';

interface GameListProps {
  category: string;
}

const GameList: React.FC<GameListProps> = ({ category }) => {
  const filteredGames = games.filter(game => game.category === category);

  return (
    <div className="games-grid">
      {filteredGames.map(game => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          thumbnail={game.thumbnail}
        />
      ))}
      <BackToHomeButton />

    </div>
  );
};

export default GameList;
