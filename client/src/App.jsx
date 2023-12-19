


import React, { useState } from "react";
import AuthPage from "./AuthPage.jsx";
import ChatsPage from "./ChatsPage";
import "./App.css"; // Import your styles

function App() {
  const [user, setUser] = useState(undefined);

  // if the user exists return user otherwise make one
  if (!user) {
    return (
      <div className="container">
        <img src="/assets/h.jpeg"  />
        <AuthPage onAuth={(user) => setUser(user)} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <img src="/assets/h.jpeg"  />
        <ChatsPage user={user} />
      </div>
    );
  }
}

export default App;

