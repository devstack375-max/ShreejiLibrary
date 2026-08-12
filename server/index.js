const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory/Local File Storage Path for Fallback DB
const DATA_FILE = path.join(__dirname, 'bookings_store.json');

// Initialize local storage file if not exists
if (!fs.existsSync(DATA_FILE)) {
  const initialData = [
    {
      id: 'demo-1',
      name: 'Rohan Sharma',
      phone: '9876543210',
      email: 'rohan.s@gmail.com',
      plan: 'Full Day (12 Hrs)',
      startDate: '2026-08-15',
      message: 'Looking for a reserved window seat for GPSC prep.',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    },
    {
      id: 'demo-2',
      name: 'Priya Patel',
      phone: '9123456789',
      email: 'priya.patel@yahoo.com',
      plan: 'Half Day — Morning',
      startDate: '2026-08-12',
      message: 'Need silent zone seat with laptop charging point.',
      status: 'Pending',
      createdAt: new Date().toISOString()
    }
  ];
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

// Helper to read bookings
function getBookings() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper to write bookings
function saveBookings(bookings) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2));
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', library: 'ShreeJi Reading Library API', timestamp: new Date() });
});

// GET all bookings (Admin)
app.get('/api/bookings', (req, res) => {
  const bookings = getBookings();
  res.json({ success: true, count: bookings.length, data: bookings });
});

// POST new booking request
app.post('/api/bookings', (req, res) => {
  const { name, phone, email, plan, startDate, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Name and Phone number are required.' });
  }

  const newBooking = {
    id: 'BK-' + Date.now(),
    name,
    phone,
    email: email || '',
    plan: plan || 'Half Day (₹700/mo)',
    startDate: startDate || new Date().toISOString().split('T')[0],
    message: message || '',
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  const bookings = getBookings();
  bookings.unshift(newBooking);
  saveBookings(bookings);

  console.log(`[ShreeJi Library] New Booking Received: ${name} (${phone}) - Plan: ${plan}`);

  res.status(201).json({
    success: true,
    message: 'Booking request sent successfully! Our library coordinator will contact you shortly.',
    booking: newBooking
  });
});

// PATCH update booking status (Admin)
app.patch('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const bookings = getBookings();
  const index = bookings.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Booking not found.' });
  }

  bookings[index].status = status || bookings[index].status;
  saveBookings(bookings);

  res.json({ success: true, message: 'Booking updated.', booking: bookings[index] });
});

// GET seat availability status
app.get('/api/seat-availability', (req, res) => {
  res.json({
    success: true,
    totalSeats: 60,
    availableSeats: 14,
    shifts: {
      morning: { name: 'Morning Shift (6am-12pm)', total: 20, filled: 16, price: 700 },
      evening: { name: 'Evening Shift (12pm-6pm)', total: 20, filled: 15, price: 700 },
      night: { name: 'Night Owl (6pm-11pm)', total: 10, filled: 7, price: 800 },
      fullDay: { name: 'Full Day (6am-11pm)', total: 10, filled: 8, price: 1000 }
    }
  });
});

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { pin } = req.body;
  if (pin === '1234' || pin === 'shreeji2026') {
    return res.json({ success: true, token: 'admin-authorized-token-8899' });
  }
  res.status(401).json({ success: false, message: 'Invalid Admin Key' });
});

app.listen(PORT, () => {
  console.log(`🚀 ShreeJi Reading Library Express Server running on http://localhost:${PORT}`);
});
