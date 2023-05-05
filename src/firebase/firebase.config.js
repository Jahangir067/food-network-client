// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx8-A3_jUkao2VTqWYd3Yy23QZLw_XZhM",
  authDomain: "the-food-network-e80fa.firebaseapp.com",
  projectId: "the-food-network-e80fa",
  storageBucket: "the-food-network-e80fa.appspot.com",
  messagingSenderId: "875689426268",
  appId: "1:875689426268:web:f11a6df1b994686df8d599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;