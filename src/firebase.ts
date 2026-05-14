import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHpwqd9rW2QZFsZj5-Mm8AIQN2-PFyiIo",
  authDomain: "espe360-738ae.firebaseapp.com",
  projectId: "espe360-738ae",
  storageBucket: "espe360-738ae.firebasestorage.app",
  messagingSenderId: "929805023471",
  appId: "1:929805023471:web:414f75faf08fc2c084c31a",
  measurementId: "G-C9JGVWYZ7Z"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
