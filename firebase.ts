
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYGMV8kvrGHbhbL4a7bEP8lPJYIeXnGVQ",
    authDomain: "lumiere-essentials-113f5.firebaseapp.com",
    projectId: "lumiere-essentials-113f5",
    storageBucket: "lumiere-essentials-113f5.firebasestorage.app",
    messagingSenderId: "699027872588",
    appId: "1:699027872588:web:76254a0713e801de530de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };
