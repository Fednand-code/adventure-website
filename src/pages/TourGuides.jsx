import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TourGuides = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // Tour guides data - ALL guides have proper photos now
  const tourGuides = [
    {
      id: 1,
      name: 'Sarah Johnson',
      region: 'Mountain Regions',
      specialization: 'mountain',
      languages: ['English', 'Spanish'],
      rating: 4.9,
      reviews: 127,
      price: '$75/day',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Expert mountain guide with 10+ years experience in alpine trekking',
      availability: 'Available next week'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      region: 'Forest Areas',
      specialization: 'forest',
      languages: ['English', 'Portuguese', 'Spanish'],
      rating: 4.8,
      reviews: 89,
      price: '$65/day',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Wildlife and forest expert specializing in jungle expeditions',
      availability: 'Available tomorrow'
    },
    {
      id: 3,
      name: 'Aisha Mohamed',
      region: 'Desert Regions',
      specialization: 'desert',
      languages: ['English', 'Arabic', 'French'],
      rating: 4.9,
      reviews: 156,
      price: '$80/day',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Desert survival expert with deep knowledge of nomadic cultures',
      availability: 'Available this weekend'
    },
    {
      id: 4,
      name: 'Kenji Tanaka',
      region: 'Coastal Areas',
      specialization: 'coastal',
      languages: ['English', 'Japanese', 'Mandarin'],
      rating: 4.7,
      reviews: 94,
      price: '$70/day',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Marine life expert and coastal adventure specialist',
      availability: 'Available today'
    },
    {
      id: 5,
      name: 'Maria Santos',
      region: 'Urban Exploration',
      specialization: 'urban',
      languages: ['English', 'Spanish', 'Italian'],
      rating: 4.6,
      reviews: 203,
      price: '$60/day',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'City historian and cultural tour expert',
      availability: 'Available next month'
    },
    {
      id: 6,
      name: 'David Chen',
      region: 'Mountain Regions',
      specialization: 'mountain',
      languages: ['English', 'Mandarin', 'Cantonese'],
      rating: 4.8,
      reviews: 112,
      price: '$85/day',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Rock climbing and mountaineering specialist',
      availability: 'Available next week'
    },
    {
      id: 7,
      name: 'Isabella Rossi',
      region: 'Forest Areas',
      specialization: 'forest',
      languages: ['English', 'Italian', 'French'],
      rating: 4.7,
      reviews: 78,
      price: '$55/day',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Botany expert and forest ecology guide',
      availability: 'Available tomorrow'
    },
    {
      id: 8,
      name: 'James Okafor',
      region: 'Desert Regions',
      specialization: 'desert',
      languages: ['English', 'Swahili', 'Arabic'],
      rating: 4.9,
      reviews: 134,
      price: '$90/day',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Safari and desert expedition leader',
      availability: 'Available this weekend'
    }
    // Removed guides without proper photos to maintain quality
  ];

  // Specializations as per BRD: "Specializations (e.g., forest, mountain)"
  const specializations = [
    { id: 'all', name: 'All Specializations' },
    { id: 'mountain', name: 'Mountain' },
    { id: 'forest', name: 'Forest' },
    { id: 'desert', name: 'Desert' },
    { id: 'coastal', name: 'Coastal' },
    { id: 'urban', name: 'Urban' }
  ];

  // Languages filter
  const languages = [
    { id: 'all', name: 'All Languages' },
    { id: 'english', name: 'English' },
    { id: 'spanish', name: 'Spanish' },
    { id: 'french', name: 'French' },
    { id: 'mandarin', name: 'Mandarin' },
    { id: 'arabic', name: 'Arabic' },
    { id: 'german', name: 'German' }
  ];

  // Filter guides based on selected specialization and language
  const filteredGuides = tourGuides.filter(guide => {
    const specializationMatch = selectedSpecialization === 'all' || guide.specialization === selectedSpecialization;
    const languageMatch = selectedLanguage === 'all' || guide.languages.includes(selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1));
    return specializationMatch && languageMatch;
  });

  const handleBookNow = (guideId, guideName) => {
    alert(`Booking Guide: ${guideName}\n\nIn a real application, this would:\n- Show guide's calendar availability\n- Allow date selection\n- Collect tour requirements\n- Process booking payment\n- Send confirmation to both parties`);
  };

  // Render star rating
  const renderStars = (rating) => {
    return '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
  };

  return (
    <div>
      {/* Advertise With Us Section - As per BRD */}
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
              Advertising space for Google Ads - This section allows monetization of the page
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{padding: '2rem 0', background: 'white'}}>
        <div className="container">
          <h2 className="font-heading" style={{textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem'}}>
            Find Your Expert Guide
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            {/* Specialization Filter - BRD: "Specializations (e.g., forest, mountain)" */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Specialization</h4>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {specializations.map(spec => (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecialization(spec.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--primary)',
                      background: selectedSpecialization === spec.id ? 'var(--primary)' : 'white',
                      color: selectedSpecialization === spec.id ? 'white' : 'var(--primary)',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      fontSize: '0.9rem'
                    }}
                  >
                    {spec.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Filter - BRD: "Languages spoken" */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Language</h4>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--secondary)',
                      background: selectedLanguage === lang.id ? 'var(--secondary)' : 'white',
                      color: selectedLanguage === lang.id ? 'white' : 'var(--secondary)',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      fontSize: '0.9rem'
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div style={{textAlign: 'center'}}>
            <p style={{color: 'var(--gray)'}}>
              Showing {filteredGuides.length} professional guides
              {selectedSpecialization !== 'all' && ` • Specialization: ${specializations.find(s => s.id === selectedSpecialization)?.name}`}
              {selectedLanguage !== 'all' && ` • Language: ${languages.find(l => l.id === selectedLanguage)?.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Tour Guides Listings - 3 columns as per BRD pattern */}
      <section style={{padding: '3rem 0', background: 'var(--background)'}}>
        <div className="container">
          {filteredGuides.length === 0 ? (
            <div style={{textAlign: 'center', padding: '3rem'}}>
              <h3 className="font-heading" style={{marginBottom: '1rem'}}>No guides found</h3>
              <p style={{color: 'var(--gray)'}}>Try adjusting your filters or check back later for more guides</p>
              <button 
                onClick={() => {
                  setSelectedSpecialization('all');
                  setSelectedLanguage('all');
                }}
                className="btn btn-primary"
                style={{marginTop: '1rem'}}
              >
                Show All Guides
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns as per BRD
              gap: '2rem'
            }}>
              {filteredGuides.map(guide => (
                <div key={guide.id} style={{
                  background: 'white',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  {/* Guide Photo - BRD: "Photo, name, region" - ALL guides have photos now */}
                  <div style={{
                    height: '200px',
                    background: `url(${guide.image}) center/cover`,
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'var(--accent)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.875rem',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600'
                    }}>
                      {guide.price}
                    </div>
                  </div>
                  
                  <div style={{padding: '1.5rem'}}>
                    {/* Name and Region - BRD: "Photo, name, region" */}
                    <h3 className="font-heading" style={{marginBottom: '0.25rem'}}>
                      {guide.name}
                    </h3>
                    <p style={{color: 'var(--secondary)', marginBottom: '1rem', fontWeight: '600'}}>
                      {guide.region}
                    </p>

                    {/* Specialization - BRD: "Specializations (e.g., forest, mountain)" */}
                    <div style={{marginBottom: '1rem'}}>
                      <span style={{
                        background: 'var(--light-gray)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.875rem',
                        textTransform: 'capitalize'
                      }}>
                        {guide.specialization} Expert
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{color: 'var(--gray)', marginBottom: '1rem', fontSize: '0.9rem'}}>
                      {guide.description}
                    </p>

                    {/* Languages - BRD: "Languages spoken" */}
                    <div style={{marginBottom: '1rem'}}>
                      <p style={{fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600'}}>Languages:</p>
                      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                        {guide.languages.map((lang, index) => (
                          <span key={index} style={{
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem'
                          }}>
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ratings and Reviews - BRD: "Ratings, Reviews" */}
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                      <div>
                        <span style={{fontWeight: 'bold'}}>{renderStars(guide.rating)}</span>
                        <span style={{color: 'var(--gray)', fontSize: '0.9rem', marginLeft: '0.5rem'}}>
                          {guide.rating} ({guide.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Availability - BRD: "Calendar availability" */}
                    <div style={{marginBottom: '1rem'}}>
                      <p style={{fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600'}}>
                        📅 {guide.availability}
                      </p>
                    </div>

                    {/* Book Now Button - BRD: "Book Now button" */}
                    <button 
                      className="btn btn-primary" 
                      style={{width: '100%'}}
                      onClick={() => handleBookNow(guide.id, guide.name)}
                    >
                      Book This Guide
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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

export default TourGuides;