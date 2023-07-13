// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17f387l-eIQ1El5rODZT5-SN9-ytYPX4",
  authDomain: "todo-app-bdfa4.firebaseapp.com",
  projectId: "todo-app-bdfa4",
  storageBucket: "todo-app-bdfa4.appspot.com",
  messagingSenderId: "443704624233",
  appId: "1:443704624233:web:89a9a12ea86dbe94a00ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);