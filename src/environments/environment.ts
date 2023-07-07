export const environment = {
  production: false
  
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjM9IQaAafpKKsPQuiRkSWoluUIlbgUYQ",
  authDomain: "gymshark-app-d3485.firebaseapp.com",
  databaseURL: "https://gymshark-app-d3485-default-rtdb.firebaseio.com",
  projectId: "gymshark-app-d3485",
  storageBucket: "gymshark-app-d3485.appspot.com",
  messagingSenderId: "75799190556",
  appId: "1:75799190556:web:82115f4aadbd099c59d3d9",
  measurementId: "G-5SL5YW9W6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
