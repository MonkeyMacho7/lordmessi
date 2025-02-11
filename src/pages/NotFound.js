import React from 'react';
import errorImage from '../assets/notfound.png';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <img src={errorImage} alt="Error" />
    </div>
  );
};

export default NotFound;
