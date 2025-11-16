const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock Database (in real app, use MongoDB/PostgreSQL)
const mockData = {
  vehicles: [
    {
      id: 1,
      name: 'Toyota Land Cruiser',
      manufacturer: 'toyota',
      type: 'SUV',
      price: '$85,000',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium SUV for adventure trips',
      features: ['4WD', '7 Seats', 'GPS Navigation'],
      available: true
    },
    {
      id: 2,
      name: 'Volkswagen Tiguan',
      manufacturer: 'volkswagen',
      type: 'SUV',
      price: '$32,000',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Compact SUV perfect for city and light off-road',
      features: ['4WD', '5 Seats', 'Sunroof'],
      available: true
    },
    {
      id: 3,
      name: 'BMW X5',
      manufacturer: 'bmw',
      type: 'SUV',
      price: '$65,000',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Luxury SUV with premium features',
      features: ['4WD', '7 Seats', 'Leather Interior', 'Premium Sound'],
      available: true
    }
  ],
  
  accommodations: [
    {
      id: 1,
      name: 'Luxury Beach Resort',
      type: 'hotel',
      location: 'tropical',
      price: '$120/night',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium beachfront accommodation with all amenities',
      amenities: ['Pool', 'Spa', 'Beach Access'],
      available: true
    },
    {
      id: 2,
      name: 'Mountain View Lodge',
      type: 'lodging',
      location: 'mountain',
      price: '$85/night',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Cozy lodge with stunning mountain views',
      amenities: ['Fireplace', 'Hiking Trails', 'Free Breakfast'],
      available: true
    }
  ],
  
  tourGuides: [
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
    }
  ],
  
  emergencyServices: [
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
    }
  ]
};

// API Routes

// Get all vehicles
app.get('/api/vehicles', (req, res) => {
  const { type, manufacturer } = req.query;
  let vehicles = mockData.vehicles;
  
  if (type && type !== 'all') {
    vehicles = vehicles.filter(vehicle => vehicle.type.toLowerCase() === type.toLowerCase());
  }
  
  if (manufacturer && manufacturer !== 'all') {
    vehicles = vehicles.filter(vehicle => vehicle.manufacturer === manufacturer);
  }
  
  res.json(vehicles);
});

// Get vehicle by ID
app.get('/api/vehicles/:id', (req, res) => {
  const vehicle = mockData.vehicles.find(v => v.id === parseInt(req.params.id));
  if (!vehicle) {
    return res.status(404).json({ error: 'Vehicle not found' });
  }
  res.json(vehicle);
});

// Get all accommodations
app.get('/api/accommodations', (req, res) => {
  const { type, location } = req.query;
  let accommodations = mockData.accommodations;
  
  if (type && type !== 'all') {
    accommodations = accommodations.filter(acc => acc.type === type);
  }
  
  if (location && location !== 'all') {
    accommodations = accommodations.filter(acc => acc.location === location);
  }
  
  res.json(accommodations);
});

// Get all tour guides
app.get('/api/guides', (req, res) => {
  const { specialization, language } = req.query;
  let guides = mockData.tourGuides;
  
  if (specialization && specialization !== 'all') {
    guides = guides.filter(guide => guide.specialization === specialization);
  }
  
  if (language && language !== 'all') {
    guides = guides.filter(guide => guide.languages.includes(language.charAt(0).toUpperCase() + language.slice(1)));
  }
  
  res.json(guides);
});

// Get all emergency services
app.get('/api/emergency-services', (req, res) => {
  const { type, urgency } = req.query;
  let services = mockData.emergencyServices;
  
  if (type && type !== 'all') {
    services = services.filter(service => service.type === type);
  }
  
  if (urgency && urgency !== 'all') {
    services = services.filter(service => service.urgency === urgency);
  }
  
  res.json(services);
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  try {
    // Log the contact form submission
    console.log('📧 Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('---');
    
    // In a real application, you would save to database here
    // For now, we'll just simulate a successful submission
    
    // Mock email setup (commented out for now)
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    const mailOptions = {
      from: email,
      to: 'hello@adventureplus.com',
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    */
    
    // Simulate a short delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message, ' + name + '! We will get back to you within 24 hours.' 
    });
    
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending message. Please try again or contact us directly at hello@adventureplus.com' 
    });
  }
});

// Booking endpoints
app.post('/api/bookings/vehicle', (req, res) => {
  const { vehicleId, dates, customerInfo } = req.body;
  console.log('🚗 Vehicle booking request:', { vehicleId, dates, customerInfo });
  
  // Process vehicle booking
  res.json({ 
    success: true, 
    bookingId: `V-${Date.now()}`,
    message: 'Vehicle booking confirmed! We will contact you shortly.'
  });
});

app.post('/api/bookings/accommodation', (req, res) => {
  const { accommodationId, checkIn, checkOut, guests } = req.body;
  console.log('🏨 Accommodation booking request:', { accommodationId, checkIn, checkOut, guests });
  
  // Process accommodation booking
  res.json({ 
    success: true, 
    bookingId: `A-${Date.now()}`,
    message: 'Accommodation booking confirmed! Check your email for details.'
  });
});

app.post('/api/bookings/guide', (req, res) => {
  const { guideId, date, duration, requirements } = req.body;
  console.log('🗺️ Guide booking request:', { guideId, date, duration, requirements });
  
  // Process guide booking
  res.json({ 
    success: true, 
    bookingId: `G-${Date.now()}`,
    message: 'Tour guide booking confirmed! Your guide will contact you soon.'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'GSX Adventure Backend is running smoothly!',
    endpoints: {
      vehicles: '/api/vehicles',
      accommodations: '/api/accommodations',
      guides: '/api/guides',
      emergency: '/api/emergency-services',
      contact: '/api/contact',
      health: '/api/health'
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to GSX Adventure Backend API!',
    version: '1.0.0',
    documentation: 'Visit /api/health for available endpoints'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 GSX Adventure Backend Server Started!`);
  console.log(`📍 Running on: http://localhost:${PORT}`);
  console.log(`📊 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
  console.log(`\n📋 Available Endpoints:`);
  console.log(`   GET  /api/vehicles - Get all vehicles`);
  console.log(`   GET  /api/accommodations - Get all accommodations`);
  console.log(`   GET  /api/guides - Get all tour guides`);
  console.log(`   GET  /api/emergency-services - Get emergency services`);
  console.log(`   POST /api/contact - Submit contact form`);
  console.log(`   GET  /api/health - Health check\n`);
});