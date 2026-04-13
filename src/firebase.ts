import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBSk7ruB7-BjDIB2o_-URQBY9nDwFLcAro",
  authDomain: "otavalo-360.firebaseapp.com",
  projectId: "otavalo-360",
  storageBucket: "otavalo-360.firebasestorage.app",
  messagingSenderId: "1093266199447",
  appId: "1:1093266199447:web:add6d3a9ae23654801aad2",
  measurementId: "G-GVECJ4Z366"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
