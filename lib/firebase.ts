import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEuB7T_Rg2D_N7lgZ3wQvIHVBnn0viDYI",
  authDomain: "ecommerce-8a3c5.firebaseapp.com",
  projectId: "ecommerce-8a3c5",
  storageBucket: "ecommerce-8a3c5.firebasestorage.app",
  messagingSenderId: "13078093345",
  appId: "1:13078093345:web:0c55f8abb9f00c5ecf4d60",
  measurementId: "G-JKLD39EEV6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);