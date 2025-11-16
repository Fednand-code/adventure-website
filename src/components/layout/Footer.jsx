import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading">Quick Links</h3>
            <div className="footer-links">
              <Link to="/home">Home</Link>
              <Link to="/contact">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="#faqs">FAQs</a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-heading">Stay Updated</h3>
            <div className="newsletter-input">
              <input 
                type="email" 
                placeholder="Enter your email"
              />
              <button className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>
                Subscribe
              </button>
            </div>
          </div>

          {/* Social & Payment */}
          <div>
            <h3 className="font-heading">Connect</h3>
            <div className="social-icons">
              {[
                { name: 'FB', url: 'https://facebook.com' },
                { name: 'IG', url: 'https://instagram.com' },
                { name: 'TikTok', url: 'https://tiktok.com' },
                { name: 'X', url: 'https://twitter.com' }
              ].map((platform) => (
                <a 
                  key={platform.name} 
                  href={platform.url} 
                  className="social-icon"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {platform.name}
                </a>
              ))}
            </div>
            <div className="payment-methods">
              {['Visa', 'Mastercard', 'PayPal'].map((method) => (
                <div key={method} className="payment-method">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;