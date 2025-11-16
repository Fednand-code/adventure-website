import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmergencySupport = () => {
  const [selectedService, setSelectedService] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');

  // Emergency services data as per BRD
  const emergencyServices = [
    {
      id: 1,
      name: 'Roadside Mechanic',
      type: 'car_mechanic',
      urgency: 'urgent',
      responseTime: '30-45 mins',
      price: 'From $50',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: '24/7 mobile mechanics for breakdowns, flat tires, and engine issues',
      contact: '+1-555-MECHANIC',
      available: true
    },
    {
      id: 2,
      name: 'Emergency Towing',
      type: 'car_towing',
      urgency: 'urgent',
      responseTime: '20-30 mins',
      price: 'From $75',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fast vehicle towing and recovery services for accidents and breakdowns',
      contact: '+1-555-TOWING',
      available: true
    },
    {
      id: 3,
      name: 'Security Response',
      type: 'security',
      urgency: 'emergency',
      responseTime: '10-15 mins',
      price: 'Emergency Only',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1589321578146-4c1f4ccf4a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Immediate security assistance and emergency response teams',
      contact: '+1-555-SECURE',
      available: true
    },
    {
      id: 4,
      name: 'Medical Emergency',
      type: 'medical',
      urgency: 'emergency',
      responseTime: '5-10 mins',
      price: 'Call 911 First',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Connect with local emergency medical services and first responders',
      contact: '911 / +1-555-MEDICAL',
      available: true
    },
    {
      id: 5,
      name: 'Quick Car Wash',
      type: 'car_wash',
      urgency: 'non_urgent',
      responseTime: '1-2 hours',
      price: 'From $25',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Mobile car cleaning and detailing services at your location',
      contact: '+1-555-CLEAN',
      available: true
    },
    {
      id: 6,
      name: 'Handyman Services',
      type: 'handyman',
      urgency: 'non_urgent',
      responseTime: '2-4 hours',
      price: 'From $40/hour',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1581094794329-cdc0c3fbf7c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'General repair and maintenance services for home and vehicle',
      contact: '+1-555-HANDYMAN',
      available: true
    },
    {
      id: 7,
      name: 'Lockout Service',
      type: 'security',
      urgency: 'urgent',
      responseTime: '25-40 mins',
      price: 'From $60',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25856cd25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Emergency lockout assistance for vehicles and properties',
      contact: '+1-555-LOCKOUT',
      available: true
    },
    {
      id: 8,
      name: 'Battery Jump Start',
      type: 'car_mechanic',
      urgency: 'urgent',
      responseTime: '30-45 mins',
      price: 'From $35',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Mobile battery jump start and replacement services',
      contact: '+1-555-BATTERY',
      available: true
    },
    {
      id: 9,
      name: 'Emergency Fuel',
      type: 'car_mechanic',
      urgency: 'urgent',
      responseTime: '20-35 mins',
      price: 'From $15 + fuel',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fuel delivery service when you run out on the road',
      contact: '+1-555-FUEL',
      available: true
    }
  ];

  // Service types as per BRD: "Emergency support: Car Mechanic, Car Towing, Security alerting, hands man, Medical Emergencies, CarWash"
  const serviceTypes = [
    { id: 'all', name: 'All Services' },
    { id: 'car_mechanic', name: 'Car Mechanic' },
    { id: 'car_towing', name: 'Car Towing' },
    { id: 'security', name: 'Security' },
    { id: 'medical', name: 'Medical' },
    { id: 'car_wash', name: 'Car Wash' },
    { id: 'handyman', name: 'Handyman' }
  ];

  // Urgency levels
  const urgencyLevels = [
    { id: 'all', name: 'All Urgencies' },
    { id: 'emergency', name: 'Emergency', color: '#dc2626' },
    { id: 'urgent', name: 'Urgent', color: '#ea580c' },
    { id: 'non_urgent', name: 'Non-Urgent', color: '#16a34a' }
  ];

  // Filter services based on selected type and urgency
  const filteredServices = emergencyServices.filter(service => {
    const typeMatch = selectedService === 'all' || service.type === selectedService;
    const urgencyMatch = selectedUrgency === 'all' || service.urgency === selectedUrgency;
    return typeMatch && urgencyMatch;
  });

  const handleContactService = (serviceName, contactNumber) => {
    alert(`Contacting: ${serviceName}\n\nPhone: ${contactNumber}\n\nIn a real application, this would:\n- Directly connect the call\n- Show service location on map\n- Provide service details\n- Track response time`);
  };

  const handleEmergencyCall = () => {
    alert(`🚨 EMERGENCY ALERT!\n\nCalling local emergency services...\n\nIn a real application, this would:\n- Connect to 911/dispatch\n- Share your location automatically\n- Provide medical/security details\n- Alert nearby emergency contacts`);
  };

  // Render urgency badge with appropriate color
  const renderUrgencyBadge = (urgency) => {
    const urgencyConfig = urgencyLevels.find(u => u.id === urgency);
    return (
      <span style={{
        background: urgencyConfig?.color || '#6b7280',
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: '15px',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase'
      }}>
        {urgencyConfig?.name || urgency}
      </span>
    );
  };

  return (
    <div>
      {/* Emergency Alert Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        color: 'white',
        padding: '1.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="font-heading" style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>
            🚨 Emergency Support
          </h1>
          <p style={{fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9}}>
            24/7 Emergency Services - Help is just a call away
          </p>
          <button 
            onClick={handleEmergencyCall}
            style={{
              background: 'white',
              color: '#dc2626',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontFamily: 'Barlow Condensed, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🚑 EMERGENCY CALL - 911
          </button>
        </div>
      </section>

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

      {/* Quick Action Buttons */}
      <section style={{padding: '2rem 0', background: 'white'}}>
        <div className="container">
          <h2 className="font-heading" style={{textAlign: 'center', marginBottom: '2rem'}}>
            Quick Emergency Actions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <button className="btn btn-primary" style={{background: '#dc2626'}}>
              🚑 Medical Emergency
            </button>
            <button className="btn btn-primary" style={{background: '#ea580c'}}>
              🚗 Car Breakdown
            </button>
            <button className="btn btn-primary" style={{background: '#ca8a04'}}>
              🛡️ Security Issue
            </button>
            <button className="btn btn-primary" style={{background: '#16a34a'}}>
              🔧 General Help
            </button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{padding: '2rem 0', background: 'var(--background)'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            {/* Service Type Filter - BRD: "All categories - Acts as a filter should show categories by location and the filter will be the kind" */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Service Type</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {serviceTypes.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--primary)',
                      background: selectedService === service.id ? 'var(--primary)' : 'white',
                      color: selectedService === service.id ? 'white' : 'var(--primary)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      textAlign: 'left'
                    }}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency Filter */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Urgency Level</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {urgencyLevels.map(urgency => (
                  <button
                    key={urgency.id}
                    onClick={() => setSelectedUrgency(urgency.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: `2px solid ${urgency.color || '#6b7280'}`,
                      background: selectedUrgency === urgency.id ? (urgency.color || '#6b7280') : 'white',
                      color: selectedUrgency === urgency.id ? 'white' : (urgency.color || '#6b7280'),
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      textAlign: 'left'
                    }}
                  >
                    {urgency.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency Info */}
            <div>
              <h4 className="font-heading" style={{marginBottom: '1rem'}}>Emergency Info</h4>
              <div style={{background: 'white', padding: '1.5rem', borderRadius: '8px', border: '2px solid #dc2626'}}>
                <p style={{margin: '0 0 1rem 0', fontWeight: 'bold', color: '#dc2626'}}>
                  🚨 For Life-Threatening Emergencies:
                </p>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold'}}>
                  CALL 911
                </p>
                <p style={{margin: 0, fontSize: '0.9rem', color: '#666'}}>
                  Immediate police, fire, or medical assistance
                </p>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div style={{textAlign: 'center'}}>
            <p style={{color: 'var(--gray)'}}>
              Showing {filteredServices.length} services
              {selectedService !== 'all' && ` • Type: ${serviceTypes.find(s => s.id === selectedService)?.name}`}
              {selectedUrgency !== 'all' && ` • Urgency: ${urgencyLevels.find(u => u.id === selectedUrgency)?.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services Listings - 3 columns as per BRD */}
      <section style={{padding: '3rem 0', background: 'white'}}>
        <div className="container">
          {filteredServices.length === 0 ? (
            <div style={{textAlign: 'center', padding: '3rem'}}>
              <h3 className="font-heading" style={{marginBottom: '1rem'}}>No services found</h3>
              <p style={{color: 'var(--gray)'}}>Try adjusting your filters or call 911 for immediate emergencies</p>
              <button 
                onClick={() => {
                  setSelectedService('all');
                  setSelectedUrgency('all');
                }}
                className="btn btn-primary"
                style={{marginTop: '1rem'}}
              >
                Show All Services
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns as per BRD
              gap: '2rem'
            }}>
              {filteredServices.map(service => (
                <div key={service.id} style={{
                  background: 'white',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                  border: `2px solid ${urgencyLevels.find(u => u.id === service.urgency)?.color || '#e5e7eb'}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  {/* Service Image */}
                  <div style={{
                    height: '160px',
                    background: `url(${service.image}) center/cover`,
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.875rem',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: '600'
                    }}>
                      {service.responseTime}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                    }}>
                      {renderUrgencyBadge(service.urgency)}
                    </div>
                  </div>
                  
                  <div style={{padding: '1.5rem'}}>
                    <h3 className="font-heading" style={{marginBottom: '0.5rem'}}>
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p style={{color: 'var(--gray)', marginBottom: '1rem', fontSize: '0.9rem'}}>
                      {service.description}
                    </p>

                    {/* Service Details */}
                    <div style={{marginBottom: '1rem'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                        <span style={{fontWeight: '600'}}>Response Time:</span>
                        <span style={{color: 'var(--primary)'}}>{service.responseTime}</span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                        <span style={{fontWeight: '600'}}>Price:</span>
                        <span style={{color: 'var(--accent)', fontWeight: 'bold'}}>{service.price}</span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{fontWeight: '600'}}>Rating:</span>
                        <span style={{color: 'var(--secondary)'}}>⭐ {service.rating}/5</span>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <button 
                      className="btn btn-primary" 
                      style={{width: '100%'}}
                      onClick={() => handleContactService(service.name, service.contact)}
                    >
                      📞 Call {service.contact}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Home */}
      <section style={{padding: '2rem 0', textAlign: 'center', background: 'var(--background)'}}>
        <div className="container">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmergencySupport;