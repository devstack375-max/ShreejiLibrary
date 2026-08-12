import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let db = null;
let isFirebaseReady = false;

try {
  if (firebaseConfig.apiKey) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    isFirebaseReady = true;
    console.log("🔥 Firebase initialized via Environment Variables");
  } else {
    console.warn("⚠️ Firebase environment variables not set.");
  }
} catch (e) {
  console.error("Firebase initialization error:", e);
}

// Function to save booking directly to Firestore
export const saveBookingToFirestore = async (bookingData) => {
  if (!db) throw new Error("Firestore DB not initialized");
  const docRef = await addDoc(collection(db, "bookings"), {
    ...bookingData,
    createdAt: serverTimestamp()
  });
  return docRef.id;
};

export { db, isFirebaseReady };
