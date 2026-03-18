import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="container text-center">
        <h2>Article non trouvé</h2>
        <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="container article-content">
      <h1 className="mb-3">{article.title}</h1>
      <img src={article.image_url} className="img-fluid rounded mb-4" alt={article.title} />
      {article.image_url_2 && <img src={article.image_url_2} className="img-fluid rounded mb-4" alt={article.title} />}
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <Link to="/" className="btn btn-secondary mt-4">
        &laquo; Retour à tous les articles
      </Link>
    </div>
  );
};

export default ArticlePage;
