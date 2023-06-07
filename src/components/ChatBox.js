import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  // to create a scroll feature we use UseRef  so we can pass it around our components
  const scroll = useRef();
// anytime changes are made in the chatroom useEffect will reflect those changes and update the page. here we use the query imported from firebase/forestore that queries the databse into looking for our message collection. then it sorts then by using order from the data thats in the collectioin saved by the createdAt key. with a max limit of 50 documents that are saved messages
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
// unsubscribe and the onsnapshot function helps listen to changes in the document by looking into the array of messages. by using a for each looop on the querysnapshot, we can push the document data and their id and sets them inside the message arrya as a new array
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {/* we map our messsages array so we cann render all messages and document data in our message component */}
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div, this connects with our sendmessage.js  */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;