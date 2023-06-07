import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* we can see the navbar and the welcome screenpage if there is no user, otherwise show the chatbox screenpage  */}
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;