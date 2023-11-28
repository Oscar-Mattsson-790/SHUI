import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MainView from "./views/MainView";
import PostMessage from "./components/PostMessage/PostMessage";
import EmptyState from "./components/EmptyState/EmptyState";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      author: "Snodden",
      content: "Saker händer här och där. Eftersökningar pågår...",
    },
    {
      id: uuidv4(),
      author: "Lindberg",
      content: "Nytt möte planerat för nästa vecka. Håll er uppdaterade!",
    },
    {
      id: uuidv4(),
      author: "Björnsson",
      content: "Projektet går framåt. Vi behöver mer feedback.",
    },
    {
      id: uuidv4(),
      author: "Åkerman",
      content: "Glöm inte bort deadline för rapporten imorgon!",
    },
    {
      id: uuidv4(),
      author: "Svensson",
      content: "Kaffemaskinen är trasig igen. Någon som kan fixa?",
    },
  ]);

  const addMessage = (newMessage) => {
    setMessages([...messages, { ...newMessage, id: uuidv4() }]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <nav className="Nav">
            <Link to="/SHUI">Hem</Link>
            <Link to="/SHUI/post">Posta Meddelande</Link>
            <Link to="/SHUI/empty">Tomt tillstånd</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/SHUI" element={<MainView messages={messages} />} />
          <Route
            path="/SHUI/post"
            element={<PostMessage onAddMessage={addMessage} />}
          />
          <Route path="/SHUI/empty" element={<EmptyState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
