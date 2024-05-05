// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-project-634eb.firebaseapp.com",
  projectId: "mern-blog-project-634eb",
  storageBucket: "mern-blog-project-634eb.appspot.com",
  messagingSenderId: "810701592012",
  appId: "1:810701592012:web:37f1f5125d73c2c8d73969",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

