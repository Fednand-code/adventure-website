import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{padding: '4rem 0', textAlign: 'center'}}>
      <div className="container">
        <h1 className="font-heading">Adventure Homepage</h1>
        <p>Explore amazing adventures and travel experiences</p>
        <Link to="/" className="btn btn-primary" style={{marginTop: '2rem'}}>
          Back to Landing
        </Link>
      </div>
    </div>
  );
};

export default HomePage;