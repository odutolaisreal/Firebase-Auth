// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Replace this with your Firebase config details
const firebaseConfig = {
  apiKey: "AIzaSyDvsbCUbk9JwpTGEr2Oca7nKxgGXtm3EMw",
  authDomain: "fir-auth-app-2647a.firebaseapp.com",
  projectId: "fir-auth-app-2647a",
  storageBucket: "fir-auth-app-2647a.appspot.com",
  messagingSenderId: "851497591861",
  appId: "1:851497591861:web:418d370f3ea9ccfa03bd7c",
  measurementId: "G-CDLWF485P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };