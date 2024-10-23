// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqMGYZ_cyJGSwbCf4eusjnQVXwTma_iLE",
  authDomain: "hotel-booking-d7bc2.firebaseapp.com",
  projectId: "hotel-booking-d7bc2",
  storageBucket: "hotel-booking-d7bc2.appspot.com",
  messagingSenderId: "428382444555",
  appId: "1:428382444555:web:fbaf85867065edcae33b0e",
  measurementId: "G-T5VRFKZ6SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Firebase Authentication

// Export db and auth so they can be used in other files
export { db, auth, analytics };
