import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_focus_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// the userAuthState function is a trigger that allows the user to sign in using the auth usestate from our firebase file and saving it.
const NavBar = () => {
  const [user] = useAuthState(auth);

  // googleSignIn functions allows firebase to recognize the user wanting to sign in with google using the googleAuthProvider() from firebase/auth it will also redirect them to googles sign in page IF they are signed in, if not they are auto sign in as the last user thats logged into google.

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
// after their signed In the data is saved in the auth, when we signed out we can clear the auth's data making it null
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {/* this checks if the user is present, and if a user is present they can sign out/see the signout button if NOT they can see the sign-in button instead */}
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;