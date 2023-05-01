// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPFTLlt7jbnPlNLqPZMp-il-09aRXAyoc",
    authDomain: "the-chefs-cafe.firebaseapp.com",
    projectId: "the-chefs-cafe",
    storageBucket: "the-chefs-cafe.appspot.com",
    messagingSenderId: "267168512466",
    appId: "1:267168512466:web:8ae91679765dc25c26b00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;