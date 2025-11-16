import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const services = [
    { name: 'Adventure Tours', path: '/home', type: 'primary' },
    { name: 'Car Marketplace', path: '/vehicles', type: 'secondary' },
    { name: 'Accommodations', path: '/bookings', type: 'accent' },
    { name: 'Tour Guides', path: '/guides', type: 'primary' },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="font-heading">Your Next Adventure Starts Here!</h1>
          <p>Discover unforgettable travel experiences and explore our integrated services</p>
          <div className="hero-buttons">
            <Link to="/home" className="btn btn-primary">
              Explore Adventures
            </Link>
            <button className="btn btn-secondary">
              Browse All Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="font-heading text-center">Our Services</h2>
          <div className="service-grid">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className={`service-card service-card-${service.type}`}
              >
                <h3 className="font-heading">{service.name}</h3>
                <p>Explore now →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;