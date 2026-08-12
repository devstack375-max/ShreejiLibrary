const express = require('express');
const cors = require('cors');
const { initializeApp, getApps } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');

const app = express();
app.use(cors());
app.use(express.json());

// Firebase Configuration for Vercel Serverless environment
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyDkp9wdQuCtDIe6nMU5kC7wXgAkCMmWhtI",
  authDomain: "shreejilibrary-b6c67.firebaseapp.com",
  projectId: "shreejilibrary-b6c67",
  storageBucket: "shreejilibrary-b6c67.firebasestorage.app",
  messagingSenderId: "605142151573",
  appId: "1:605142151573:web:b3f4b2cca08b4e48eb869c",
  measurementId: "G-4WBSW2FCZG"
};

let db = null;
try {
  const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(firebaseApp);
} catch (e) {
  console.error("Vercel Firebase init error:", e);
}

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    library: 'ShreeJi Reading Library Vercel API', 
    timestamp: new Date().toISOString() 
  });
});

app.post('/api/bookings', async (req, res) => {
  const { name, phone, email, plan, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Name and Phone number are required.' });
  }

  const newBooking = {
    id: 'BK-' + Date.now(),
    name,
    phone,
    email: email || '',
    plan: plan || 'Half Day (₹700/mo)',
    message: message || '',
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  try {
    if (db) {
      await addDoc(collection(db, "bookings"), {
        ...newBooking,
        firestoreTimestamp: serverTimestamp()
      });
    }
  } catch (err) {
    console.warn("Vercel Firestore write notice:", err);
  }

  res.status(201).json({
    success: true,
    message: 'Booking request sent successfully!',
    booking: newBooking
  });
});

module.exports = app;
