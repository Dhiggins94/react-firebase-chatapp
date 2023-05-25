import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_focus_web.png";

const Welcome = () => {
  const googleSignIn = () => {
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;

 // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAUgW5wOKxoeuGEBVqnhugob9F8f_jKx4M",
//   authDomain: "react-chat-81178.firebaseapp.com",
//   projectId: "react-chat-81178",
//   storageBucket: "react-chat-81178.appspot.com",
//   messagingSenderId: "476564020822",
//   appId: "1:476564020822:web:811cb454f90504f92be5f7",
//   measurementId: "G-154J8TDN6E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);