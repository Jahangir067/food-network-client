// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQrlgwr9IjzpdyYe-gbVjUcKm5ySyddTE",
  authDomain: "the-food-network-client.firebaseapp.com",
  projectId: "the-food-network-client",
  storageBucket: "the-food-network-client.appspot.com",
  messagingSenderId: "96819312390",
  appId: "1:96819312390:web:f467f8e0a2c8973cb7d087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;