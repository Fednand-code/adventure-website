import React, { useState } from 'react';

const navigationItems = [
  { name: 'Adventure', path: '/home' },
  { name: 'Car Marketplace', path: '/vehicles' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'Tour Guides', path: '/guides' },
  { name: 'Emergency Support', path: '/emergency' },
  { name: 'About Us/Contact', path: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo font-heading">
            Adventure+
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;