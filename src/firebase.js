//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
/////TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUgW5wOKxoeuGEBVqnhugob9F8f_jKx4M",
  authDomain: "react-chat-81178.firebaseapp.com",
  projectId: "react-chat-81178",
  storageBucket: "react-chat-81178.appspot.com",
  messagingSenderId: "476564020822",
  appId: "1:476564020822:web:811cb454f90504f92be5f7",
  measurementId: "G-154J8TDN6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// this is where we take our firebase credentials