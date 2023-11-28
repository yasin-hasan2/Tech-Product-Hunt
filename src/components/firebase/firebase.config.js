// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBTgVg2W4DNkHVJarzh7Mi3V5kw3IvprM",
    authDomain: "bunty-tech.firebaseapp.com",
    projectId: "bunty-tech",
    storageBucket: "bunty-tech.appspot.com",
    messagingSenderId: "769056300383",
    appId: "1:769056300383:web:c19dcb9fec6e47d408aaea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app