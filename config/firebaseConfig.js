// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, getstorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjsfNjFdw-Q4hEogUkDTsDqLY8E9HxIeM",
  authDomain: "interior-ai-e0700.firebaseapp.com",
  projectId: "interior-ai-e0700",
  storageBucket: "interior-ai-e0700.firebasestorage.app",
  messagingSenderId: "198715917684",
  appId: "1:198715917684:web:31937d57225a658e355821",
  measurementId: "G-4KV6TWKMPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);