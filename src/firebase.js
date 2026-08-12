import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkp9wdQuCtDIe6nMU5kC7wXgAkCMmWhtI",
  authDomain: "shreejilibrary-b6c67.firebaseapp.com",
  projectId: "shreejilibrary-b6c67",
  storageBucket: "shreejilibrary-b6c67.firebasestorage.app",
  messagingSenderId: "605142151573",
  appId: "1:605142151573:web:b3f4b2cca08b4e48eb869c",
  measurementId: "G-4WBSW2FCZG"
};

let db = null;
let isFirebaseReady = false;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  isFirebaseReady = true;
  console.log("🔥 Firebase initialized successfully for ShreeJi Reading Library");
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
