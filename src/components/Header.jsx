import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 m-0">
          <Link to="/" className="text-white text-decoration-none">
            P'tit Journal 974
          </Link>
        </h1>
        <p className="m-0 d-none d-sm-block">L'actualité de La Réunion pour les enfants</p>
      </div>
    </header>
  );
};

export default Header;
