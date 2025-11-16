import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';

const ContactAbout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [backendStatus, setBackendStatus] = useState('checking');

  // Check backend connection on component load
  useEffect(() => {
    const checkBackend = async () => {
      try {
        await api.checkHealth();
        setBackendStatus('connected');
        console.log('✅ Backend connection successful');
      } catch (error) {
        setBackendStatus('disconnected');
        console.error('❌ Backend connection failed:', error);
      }
    };

    checkBackend();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await api.submitContact(formData);

      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'There was an error sending your message.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'Unable to connect to server. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #1a5c3a 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="font-heading" style={{fontSize: '3rem', marginBottom: '1rem'}}>
            About Us & Contact
          </h1>
          <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto'}}>
            Your trusted partner for unforgettable adventures and reliable services across the world
          </p>
        </div>
      </section>

      {/* Backend Status Indicator */}
      <section style={{padding: '1rem 0', background: backendStatus === 'connected' ? '#d1fae5' : '#fef3c7', textAlign: 'center'}}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: backendStatus === 'connected' ? '#065f46' : '#92400e'
          }}>
            {backendStatus === 'connected' ? '✅' : '⚠️'}
            Backend: {backendStatus === 'connected' ? 'Connected' : 'Checking...'}
          </div>
        </div>
      </section>

      {/* Advertise With Us Section */}
      <section style={{padding: '2rem 0', background: 'var(--light-gray)', textAlign: 'center'}}>
        <div className="container">
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            border: '2px dashed var(--gray)',
            color: 'var(--gray)'
          }}>
            <h4 className="font-heading" style={{marginBottom: '1rem', color: 'var(--gray)'}}>
              ADVERTISE WITH US
            </h4>
            <p style={{margin: 0, fontStyle: 'italic'}}>
              Advertising space for Google Ads 
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section style={{padding: '4rem 0', background: 'white'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
            
            {/* Company History & Purpose */}
            <div>
              <h2 className="font-heading" style={{marginBottom: '1.5rem', color: 'var(--primary)'}}>
                Our Story
              </h2>
              <div style={{lineHeight: '1.8'}}>
                <p style={{marginBottom: '1rem'}}>
                  <strong>Founded in 2018 in Nairobi</strong>, Adventure+ emerged from a passion for showcasing world's incredible landscapes and rich cultural heritage.
                </p>
                <p style={{marginBottom: '1rem'}}>
                  Our <strong>purpose</strong> is to make world-wide adventures accessible while ensuring authentic, safe, and unforgettable experiences for every traveler.
                </p>
              </div>
            </div>

            {/* What We Deliver */}
            <div>
              <h2 className="font-heading" style={{marginBottom: '1.5rem', color: 'var(--primary)'}}>
                Our Commitment
              </h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>✓</span>
                  <div>
                    <strong>Authentic Natural Experiences</strong>
                    <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)', fontSize: '0.9rem'}}>
                      Curated adventures that showcase real nature and culture
                    </p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>✓</span>
                  <div>
                    <strong>world-wide Expert Guides</strong>
                    <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)', fontSize: '0.9rem'}}>
                      Knowledgeable guides and hosts
                    </p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>✓</span>
                  <div>
                    <strong>24/7 world-wide Support</strong>
                    <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)', fontSize: '0.9rem'}}>
                      Round-the-clock assistance across the world
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Coverage */}
            <div>
              <h2 className="font-heading" style={{marginBottom: '1.5rem', color: 'var(--primary)'}}>
                Kenya & East Africa Coverage
              </h2>
              <div style={{background: 'var(--background)', padding: '1.5rem', borderRadius: '8px'}}>
                <p style={{margin: '0 0 1rem 0', fontWeight: '600'}}>We operate across:</p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem'}}>
                  <span>🏔️ North America</span>
                  <span>🏝️ South America</span>
                  <span>🦁 Africa</span>
                  <span>🏜️ Asia</span>
                  <span>🌋 Europe</span>
                  <span>🌊 Australia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Composition & Customer Satisfaction */}
          <div style={{marginTop: '3rem', padding: '2rem', background: 'var(--background)', borderRadius: '10px'}}>
            <h2 className="font-heading" style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)'}}>
              Why Choose Adventure+ 
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
              <div>
                <h3 className="font-heading" style={{color: 'var(--accent)', fontSize: '2.5rem', margin: '0'}}>25K+</h3>
                <p style={{margin: '0.5rem 0 0 0', fontWeight: '600'}}>Happy Travelers</p>
              </div>
              <div>
                <h3 className="font-heading" style={{color: 'var(--accent)', fontSize: '2.5rem', margin: '0'}}>80+</h3>
                <p style={{margin: '0.5rem 0 0 0', fontWeight: '600'}}>Guides</p>
              </div>
              <div>
                <h3 className="font-heading" style={{color: 'var(--accent)', fontSize: '2.5rem', margin: '0'}}>15+</h3>
                <p style={{margin: '0.5rem 0 0 0', fontWeight: '600'}}>Countries</p>
              </div>
              <div>
                <h3 className="font-heading" style={{color: 'var(--accent)', fontSize: '2.5rem', margin: '0'}}>4.9★</h3>
                <p style={{margin: '0.5rem 0 0 0', fontWeight: '600'}}>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{padding: '4rem 0', background: 'var(--background)'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="font-heading" style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--primary)'}}>
              Get In Touch - Nairobi Office
            </h2>
            
            {/* Submission Status Messages */}
            {submitStatus && (
              <div style={{
                padding: '1rem',
                marginBottom: '2rem',
                borderRadius: '8px',
                background: submitStatus.type === 'success' ? '#d1fae5' : '#fee2e2',
                color: submitStatus.type === 'success' ? '#065f46' : '#991b1b',
                border: `2px solid ${submitStatus.type === 'success' ? '#10b981' : '#ef4444'}`,
                textAlign: 'center',
                fontWeight: '600'
              }}>
                {submitStatus.type === 'success' ? '✅ ' : '❌ '}
                {submitStatus.message}
              </div>
            )}

            {/* Backend Connection Warning */}
            {backendStatus === 'disconnected' && (
              <div style={{
                padding: '1rem',
                marginBottom: '2rem',
                borderRadius: '8px',
                background: '#fef3c7',
                color: '#92400e',
                border: '2px solid #f59e0b',
                textAlign: 'center'
              }}>
                <p style={{margin: '0 0 0.5rem 0', fontWeight: '600'}}>Backend Not Connected</p>
                <p style={{margin: 0, fontSize: '0.9rem'}}>
                  Make sure your backend server is running on port 5000
                </p>
              </div>
            )}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
              
              {/* Contact Information */}
              <div>
                <h3 className="font-heading" style={{marginBottom: '1.5rem'}}>Nairobi Office</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>📧</span>
                    <div>
                      <strong>Email</strong>
                      <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)'}}>info@adventureplus.co.ke</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>📞</span>
                    <div>
                      <strong>Phone</strong>
                      <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)'}}>+254 743 888 255</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>📍</span>
                    <div>
                      <strong>Headquarters</strong>
                      <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)'}}>
                        ABC Place, 3rd Floor<br />
                        Waiyaki Way, Westlands<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <span style={{color: 'var(--accent)', fontSize: '1.5rem'}}>🕒</span>
                    <div>
                      <strong>Postal Address</strong>
                      <p style={{margin: '0.25rem 0 0 0', color: 'var(--gray)'}}>
                        P.O. Box 12345-00100<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '8px'}}>
                  <h4 className="font-heading" style={{marginBottom: '1rem'}}>Business Hours (EAT)</h4>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>Monday - Friday</span>
                      <span style={{fontWeight: '600'}}>8:00 AM - 6:00 PM</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>Saturday</span>
                      <span style={{fontWeight: '600'}}>9:00 AM - 4:00 PM</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>Sunday</span>
                      <span style={{fontWeight: '600'}}>10:00 AM - 2:00 PM</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--light-gray)'}}>
                      <span style={{color: 'var(--accent)', fontWeight: '600'}}>Emergency Support</span>
                      <span style={{color: 'var(--accent)', fontWeight: '600'}}>24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="font-heading" style={{marginBottom: '1.5rem'}}>Send us a Message</h3>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting || backendStatus === 'disconnected'}
                    style={{
                      padding: '1rem',
                      border: '2px solid var(--light-gray)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      opacity: (isSubmitting || backendStatus === 'disconnected') ? 0.7 : 1
                    }}
                  />
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting || backendStatus === 'disconnected'}
                      style={{
                        padding: '1rem',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s',
                        opacity: (isSubmitting || backendStatus === 'disconnected') ? 0.7 : 1
                      }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting || backendStatus === 'disconnected'}
                      style={{
                        padding: '1rem',
                        border: '2px solid var(--light-gray)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s',
                        opacity: (isSubmitting || backendStatus === 'disconnected') ? 0.7 : 1
                      }}
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting || backendStatus === 'disconnected'}
                    style={{
                      padding: '1rem',
                      border: '2px solid var(--light-gray)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      opacity: (isSubmitting || backendStatus === 'disconnected') ? 0.7 : 1
                    }}
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting || backendStatus === 'disconnected'}
                    style={{
                      padding: '1rem',
                      border: '2px solid var(--light-gray)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      resize: 'vertical',
                      minHeight: '120px',
                      opacity: (isSubmitting || backendStatus === 'disconnected') ? 0.7 : 1
                    }}
                  />

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{
                      padding: '1rem 2rem', 
                      fontSize: '1.1rem',
                      opacity: (isSubmitting || backendStatus === 'disconnected') ? 0.7 : 1,
                      cursor: (isSubmitting || backendStatus === 'disconnected') ? 'not-allowed' : 'pointer'
                    }}
                    disabled={isSubmitting || backendStatus === 'disconnected'}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section style={{padding: '2rem 0', textAlign: 'center', background: 'white'}}>
        <div className="container">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactAbout;