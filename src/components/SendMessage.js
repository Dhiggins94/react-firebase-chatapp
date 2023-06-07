import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  // make a usestate for our messages to add to our onchange function later so we can see the state of a message the user types.
  const [message, setMessage] = useState("");
// we make a sendmessage async function to check if the user is sendiing a empty string message or whitespace and alerts the user to enter a valid messgae.
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // when its not an empty message the users id,displayname and photourl FROM THE GOOGLE AUTH DATA thats stored when logged in gets filled with their data. afterwards the addDoc() creates a document inside a collcection named messages into our firebase db thanks to the db import from eariler and if theres no collection this method will generate one for us. as well as key value pairs for our name,text message, avatar, the time the message was saved and store in our database and user id.
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    // this tells our browser to let the scroll span be in view in a smooth behaviour after a message is sent. this connects with our chatbox.js
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
