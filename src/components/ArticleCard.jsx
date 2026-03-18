import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={article.image_url} className="card-img-top" alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.short_description}</p>
          <Link to={`/article/${article.id}`} className="btn btn-primary mt-auto">
            Lire la suite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
