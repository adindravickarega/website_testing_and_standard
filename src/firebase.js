// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, increment, runTransaction, get } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAhox2FIN245OccEHv3dgVlKVEI4TNQjNU",
    authDomain: "statistik-website-ec506.firebaseapp.com",
    databaseURL: "https://statistik-website-ec506-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "statistik-website-ec506",
    storageBucket: "statistik-website-ec506.firebasestorage.app",
    messagingSenderId: "1074567275039",
    appId: "1:1074567275039:web:575204d0a51ea12734eb2a",
    measurementId: "G-PEX09MG4RZ"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, increment, runTransaction, get };
