// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiP8YSM6hZIXPd70mq5gnz6P-dsKSj058",
    authDomain: "tuna-53705.firebaseapp.com",
    projectId: "tuna-53705",
    storageBucket: "tuna-53705.appspot.com",
    messagingSenderId: "1079198172273",
    appId: "1:1079198172273:web:67c6372edbd0d964ef47d0",
    measurementId: "G-WE7M0NP34S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
