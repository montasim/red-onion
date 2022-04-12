// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaRr1dm2Jic-u_qlkcIdaNURB8rE39q5s",
  authDomain: "red-onion-e3d33.firebaseapp.com",
  projectId: "red-onion-e3d33",
  storageBucket: "red-onion-e3d33.appspot.com",
  messagingSenderId: "310360275613",
  appId: "1:310360275613:web:c39501026a7cd4eeb93274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth);