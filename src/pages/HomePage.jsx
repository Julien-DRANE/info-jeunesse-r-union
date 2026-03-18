import React from 'react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

const HomePage = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="display-4">Bienvenue !</h2>
        <p className="lead">Découvre les dernières nouvelles de ton île.</p>
      </div>
      <div className="row">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
