import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bookings = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Generic accommodation data as per BRD - using placeholders
  const accommodations = [
    { 
      id: 1, 
      name: 'Luxury Beach Resort', 
      type: 'hotel', 
      location: 'tropical', 
      price: '$120/night', 
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium beachfront accommodation with all amenities'
    },
    { 
      id: 2, 
      name: 'City Center Hotel', 
      type: 'hotel', 
      location: 'urban', 
      price: '$90/night', 
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Modern hotel in the heart of the city'
    },
    { 
      id: 3, 
      name: 'Mountain View Lodge', 
      type: 'lodging', 
      location: 'mountain', 
      price: '$75/night', 
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Cozy lodge with stunning mountain scenery'
    },
    { 
      id: 4, 
      name: 'Downtown Apartment', 
      type: 'airbnb', 
      location: 'urban', 
      price: '$65/night', 
      image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious apartment in central location'
    },
    { 
      id: 5, 
      name: 'Beachside Villa', 
      type: 'airbnb', 
      location: 'tropical', 
      price: '$150/night', 
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Private villa with beach access and pool'
    },
    { 
      id: 6, 
      name: 'Backpackers Hostel', 
      type: 'hostel', 
      location: 'urban', 
      price: '$25/night', 
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Budget-friendly accommodation with social areas'
    },
    { 
      id: 7, 
      name: 'Lakeside Cabin', 
      type: 'lodging', 
      location: 'mountain', 
      price: '$85/night', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Rustic cabin perfect for nature lovers'
    },
    { 
      id: 8, 
      name: 'Historic Inn', 
      type: 'lodging', 
      location: 'urban', 
      price: '$95/night', 
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Charming historic property with modern comforts'
    },
    { 
      id: 9, 
      name: 'Budget Hotel', 
      type: 'hotel', 
      location: 'urban', 
      price: '$55/night', 
      image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Comfortable and affordable hotel accommodation'
    }
  ];

  // As per BRD: "filter will be the kind of eg hotel or Airbnb or hostel or lodging"
  const accommodationTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'airbnb', name: 'Airbnb' },
    { id: 'hostel', name: 'Hostel' },
    { id: 'lodging', name: 'Lodging' }
  ];

  // As per BRD: "filter should show houses by location"
  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'urban', name: 'Urban/City' },
    { id: 'tropical', name: 'Tropical/Beach' },
    { id: 'mountain', name: 'Mountain/Countryside' }
  ];

  // Filter accommodations based on selected type and location
  const filteredAccommodations = accommodations.filter(acc => {
    const typeMatch = selectedType === 'all' || acc.type === selectedType;
    const locationMatch = selectedLocation === 'all' || acc.location === selectedLocation;
    return typeMatch && locationMatch;
  });

  const handleBookNow = (accommodationId, accommodationName) => {
    alert(`Booking: ${accommodationName}\n\nIn a real application, this would:\n- Show detailed accommodation information\n- Display booking calendar\n- Process payment\n- Send confirmation`);
  };

  return (
    <div>
      {/* Advertise With Us Section - Made smaller */}
      <section className="advertise-section" style={{background: '#f8f9fa', padding: '1.5rem 0', textAlign: 'center'}}>
        <div className="container">
          <h2 className="font-heading" style={{color: '#666', fontSize: '1.5rem', marginBottom: '0.5rem'}}>
            ADVERTISE WITH US
          </h2>
          <p style={{color: '#888', marginBottom: '1rem', fontSize: '0.9rem'}}>
            Monetize your page to display ads as per Google's policies
          </p>
          <div style={{
            background: 'var(--light-gray)',
            padding: '1.5rem',
            borderRadius: '8px',
            color: 'var(--gray)',
            border: '1px dashed var(--gray)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h3 className="font-heading" style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
              Advertising Space
            </h3>
            <p style={{fontSize: '0.9rem'}}>This section allows monetization of the page to display ads</p>
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'white',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}>
              <p style={{fontStyle: 'italic', color: '#666', fontSize: '0.8rem', margin: 0}}>
                Google Ads would be displayed here according to policies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section - As per BRD requirements */}
      <section style={{padding: '2rem 0', background: 'white'}}>
        <div className="container">
          <h3 className="font-heading" style={{marginBottom: '1.5rem', textAlign: 'center'}}>
            Find Your Perfect Accommodation
          </h3>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            {/* Type Filter - BRD: "filter will be the kind of eg hotel or Airbnb or hostel or lodging" */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Accommodation Type</h4>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {accommodationTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--primary)',
                      background: selectedType === type.id ? 'var(--primary)' : 'white',
                      color: selectedType === type.id ? 'white' : 'var(--primary)',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      fontSize: '0.9rem'
                    }}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter - BRD: "filter should show houses by location" */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Location</h4>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {locations.map(location => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--secondary)',
                      background: selectedLocation === location.id ? 'var(--secondary)' : 'white',
                      color: selectedLocation === location.id ? 'white' : 'var(--secondary)',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      fontSize: '0.9rem'
                    }}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div style={{textAlign: 'center'}}>
            <p style={{color: 'var(--gray)'}}>
              Showing {filteredAccommodations.length} properties
              {selectedType !== 'all' && ` • Type: ${accommodationTypes.find(t => t.id === selectedType)?.name}`}
              {selectedLocation !== 'all' && ` • Location: ${locations.find(l => l.id === selectedLocation)?.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Listings - BRD: "Three columns - The displayed products should be in three columns" */}
      <section style={{padding: '3rem 0', background: 'var(--background)'}}>
        <div className="container">
          {filteredAccommodations.length === 0 ? (
            <div style={{textAlign: 'center', padding: '3rem'}}>
              <h3 className="font-heading" style={{marginBottom: '1rem'}}>No accommodations found</h3>
              <p style={{color: 'var(--gray)'}}>Try adjusting your filters</p>
              <button 
                onClick={() => {
                  setSelectedType('all');
                  setSelectedLocation('all');
                }}
                className="btn btn-primary"
                style={{marginTop: '1rem'}}
              >
                Show All Properties
              </button>
            </div>
          ) : (
            <div className="accommodation-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)', // Exactly 3 columns as per BRD
              gap: '2rem'
            }}>
              {filteredAccommodations.map(accommodation => (
                <div key={accommodation.id} className="accommodation-card" style={{
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
                  {/* BRD: "Use placeholders - to display the images, however the hotel room/details will be fetched from the back-end" */}
                  <div style={{
                    height: '200px',
                    background: `url(${accommodation.image}) center/cover`,
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
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {accommodation.type}
                    </div>
                  </div>
                  <div style={{padding: '1.5rem'}}>
                    <h3 className="font-heading" style={{marginBottom: '0.5rem'}}>
                      {accommodation.name}
                    </h3>
                    <p style={{color: 'var(--gray)', marginBottom: '1rem', fontSize: '0.9rem'}}>
                      {accommodation.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        color: 'var(--primary)',
                        fontSize: '1.25rem',
                        fontWeight: 'bold'
                      }}>
                        {accommodation.price}
                      </span>
                      <span style={{
                        color: 'var(--secondary)',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        {locations.find(loc => loc.id === accommodation.location)?.name}
                      </span>
                    </div>
                    <button 
                      className="btn btn-primary" 
                      style={{width: '100%'}}
                      onClick={() => handleBookNow(accommodation.id, accommodation.name)}
                    >
                      Book Now
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

export default Bookings;