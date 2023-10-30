// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxx3YbsQ1CevXsObagGLgVcSmxjoTouEY",
  authDomain: "movie-app-9f28a.firebaseapp.com",
  projectId: "movie-app-9f28a",
  storageBucket: "movie-app-9f28a.appspot.com",
  messagingSenderId: "434478600088",
  appId: "1:434478600088:web:bb484376634dd22b22e5ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)