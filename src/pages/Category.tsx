import React from 'react';
import { useParams } from 'react-router-dom';
import GameList from '../components/GameList';

const Category: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  return (
    <div>
      <header>
        <h1>{(categoryName ?? '').charAt(0).toUpperCase() + (categoryName ?? '').slice(1)}</h1>
      </header>
      <main>
        <GameList category={categoryName ?? ''} />
      </main>
    </div>
  );
};

export default Category;
