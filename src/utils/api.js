const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Vehicles
  getVehicles: (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.type) params.append('type', filters.type);
    if (filters.manufacturer) params.append('manufacturer', filters.manufacturer);
    
    return fetch(`${API_BASE_URL}/vehicles?${params}`).then(res => res.json());
  },

  // Accommodations
  getAccommodations: (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.type) params.append('type', filters.type);
    if (filters.location) params.append('location', filters.location);
    
    return fetch(`${API_BASE_URL}/accommodations?${params}`).then(res => res.json());
  },

  // Tour Guides
  getTourGuides: (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.specialization) params.append('specialization', filters.specialization);
    if (filters.language) params.append('language', filters.language);
    
    return fetch(`${API_BASE_URL}/guides?${params}`).then(res => res.json());
  },

  // Emergency Services
  getEmergencyServices: (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.type) params.append('type', filters.type);
    if (filters.urgency) params.append('urgency', filters.urgency);
    
    return fetch(`${API_BASE_URL}/emergency-services?${params}`).then(res => res.json());
  },

  // Contact Form
  submitContact: (formData) => {
    return fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(res => res.json());
  },

  // Bookings
  bookVehicle: (bookingData) => {
    return fetch(`${API_BASE_URL}/bookings/vehicle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    }).then(res => res.json());
  },

  bookAccommodation: (bookingData) => {
    return fetch(`${API_BASE_URL}/bookings/accommodation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    }).then(res => res.json());
  },

  bookGuide: (bookingData) => {
    return fetch(`${API_BASE_URL}/bookings/guide`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    }).then(res => res.json());
  }
};