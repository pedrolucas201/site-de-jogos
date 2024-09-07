import React from 'react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  id: string;
  title: string;
  thumbnail: string;
}

const GameCard: React.FC<GameCardProps> = ({ id, title, thumbnail }) => {
  return (
    <div className="game-card">
      <Link to={`/games/${id}`}>
        <img src={thumbnail} alt={title} style={{ width: '100%', height: 'auto' }} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default GameCard;
