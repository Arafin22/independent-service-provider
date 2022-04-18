
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ5jwQeCWjGhKTx3PzTHUDwMhDGJVkD64",
  authDomain: "onephotographer-7a9fd.firebaseapp.com",
  projectId: "onephotographer-7a9fd",
  storageBucket: "onephotographer-7a9fd.appspot.com",
  messagingSenderId: "294288893996",
  appId: "1:294288893996:web:1cea44bf59686800c04989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;