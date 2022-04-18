
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC503SL0e0gsaN6BwRyD937MqbHpx_MPSg",
  authDomain: "onephotographer1-b50b3.firebaseapp.com",
  projectId: "onephotographer1-b50b3",
  storageBucket: "onephotographer1-b50b3.appspot.com",
  messagingSenderId: "218708217107",
  appId: "1:218708217107:web:8f95a9579f5f60722f9ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;