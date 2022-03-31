// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfvN3ItXc_iLrVLdB1_v8KJwukuCYEQFw",
  authDomain: "ferreteria-c8f3d.firebaseapp.com",
  projectId: "ferreteria-c8f3d",
  storageBucket: "ferreteria-c8f3d.appspot.com",
  messagingSenderId: "883053495552",
  appId: "1:883053495552:web:8ded5a6af40dcd2a53dfe5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;