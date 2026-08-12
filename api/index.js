const express = require('express');
const cors = require('cors');
const { initializeApp, getApps } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');

const app = express();
app.use(cors());
app.use(express.json());

// Firebase Configuration read from Vercel process.env variables
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

let db = null;
try {
  if (firebaseConfig.apiKey) {
    const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(firebaseApp);
  }
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
