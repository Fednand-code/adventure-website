import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data - organized by manufacturer
  const vehicles = [
    { id: 1, name: 'Toyota Land Cruiser', manufacturer: 'toyota', type: 'SUV', price: '$85,000', year: '2023', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Volkswagen Tiguan', manufacturer: 'volkswagen', type: 'SUV', price: '$32,000', year: '2022', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'BMW X5', manufacturer: 'bmw', type: 'SUV', price: '$65,000', year: '2023', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Toyota Camry', manufacturer: 'toyota', type: 'Sedan', price: '$28,000', year: '2023', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Nissan Altima', manufacturer: 'nissan', type: 'Sedan', price: '$26,500', year: '2022', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Jeep Wrangler', manufacturer: 'jeep', type: '4x4', price: '$42,000', year: '2023', image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 7, name: 'Volvo XC90', manufacturer: 'volvo', type: 'SUV', price: '$55,000', year: '2023', image: 'https://images.unsplash.com/photo-1563720223485-8f6a4a3a3c0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 8, name: 'Volkswagen Golf', manufacturer: 'volkswagen', type: 'Hatchback', price: '$24,000', year: '2023', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 9, name: 'BMW 3 Series', manufacturer: 'bmw', type: 'Sedan', price: '$45,000', year: '2023', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
  ];

  const categories = [
    { id: 'all', name: 'All Vehicles' },
    { id: 'volkswagen', name: 'Volkswagen' },
    { id: 'nissan', name: 'Nissan' },
    { id: 'jeep', name: 'Jeep' },
    { id: 'toyota', name: 'Toyota' },
    { id: 'bmw', name: 'BMW' },
    { id: 'volvo', name: 'Volvo' }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.manufacturer === selectedCategory);

  // Function to handle View Details click
  const handleViewDetails = (vehicleId) => {
    alert(`Viewing details for vehicle ID: ${vehicleId}\n\nIn a real application, this would:\n- Show detailed vehicle information\n- Display more photos\n- Show contact information\n- Allow booking/test drive`);
  };

  return (
    <div>
      {/* Advertise With Us Section - Reduced size */}
      <section className="advertise-section" style={{background: '#f8f9fa', padding: '1.5rem 0', textAlign: 'center'}}>
        <div className="container">
          <h2 className="font-heading" style={{color: '#666', fontSize: '1.25rem', marginBottom: '0.5rem'}}>
            ADVERTISE WITH US
          </h2>
          <p style={{color: '#888', marginBottom: '1rem', fontSize: '0.9rem'}}>
            Monetize your space with Google Ads
          </p>
          <div style={{
            background: 'var(--light-gray)',
            padding: '1rem',
            borderRadius: '8px',
            color: 'var(--gray)',
            border: '1px dashed var(--gray)',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <h3 className="font-heading" style={{fontSize: '1rem', marginBottom: '0.5rem'}}>
              Advertising Space
            </h3>
            <p style={{fontSize: '0.8rem', marginBottom: '0.5rem'}}>Reach adventure enthusiasts and car buyers</p>
            <div style={{
              padding: '0.75rem',
              background: 'white',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}>
              <p style={{fontStyle: 'italic', color: '#666', fontSize: '0.75rem', margin: 0}}>
                Google Ads would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{padding: '2rem 0', background: 'white'}}>
        <div className="container">
          <h3 className="font-heading" style={{marginBottom: '1rem'}}>All Categories</h3>
          <div className="filter-buttons" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '2px solid var(--primary)',
                  background: selectedCategory === category.id ? 'var(--primary)' : 'white',
                  color: selectedCategory === category.id ? 'white' : 'var(--primary)',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          <p style={{marginTop: '1rem', color: '#666', fontSize: '0.9rem'}}>
            Showing {filteredVehicles.length} vehicles {selectedCategory !== 'all' ? `for ${categories.find(cat => cat.id === selectedCategory)?.name}` : ''}
          </p>
        </div>
      </section>

      {/* Vehicle Listings */}
      <section style={{padding: '3rem 0', background: 'var(--background)'}}>
        <div className="container">
          {filteredVehicles.length === 0 ? (
            <div style={{textAlign: 'center', padding: '3rem'}}>
              <h3 className="font-heading" style={{marginBottom: '1rem'}}>No vehicles found</h3>
              <p>Try selecting a different category</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="btn btn-primary"
                style={{marginTop: '1rem'}}
              >
                Show All Vehicles
              </button>
            </div>
          ) : (
            <div className="vehicle-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="vehicle-card" style={{
                  background: 'white',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <div style={{
                    height: '200px',
                    background: `url(${vehicle.image}) center/cover`,
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
                      {vehicle.year}
                    </div>
                  </div>
                  <div style={{padding: '1.5rem'}}>
                    <h3 className="font-heading" style={{marginBottom: '0.5rem'}}>{vehicle.name}</h3>
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
                        {vehicle.price}
                      </span>
                      <span style={{
                        background: 'var(--light-gray)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.875rem',
                        textTransform: 'uppercase'
                      }}>
                        {vehicle.type}
                      </span>
                    </div>
                    <button 
                      className="btn btn-primary" 
                      style={{width: '100%'}}
                      onClick={() => handleViewDetails(vehicle.id)}
                    >
                      View Details
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

export default CarMarketplace;