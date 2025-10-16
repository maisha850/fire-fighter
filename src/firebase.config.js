// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHQnuS85ygCYdNuRVNqHmISp4ZqCp-sNo",
  authDomain: "fir-fighter-f3312.firebaseapp.com",
  projectId: "fir-fighter-f3312",
  storageBucket: "fir-fighter-f3312.firebasestorage.app",
  messagingSenderId: "845497140267",
  appId: "1:845497140267:web:2e80b2971522a5a3d7566e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
