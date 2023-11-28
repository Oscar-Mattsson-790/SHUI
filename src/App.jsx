import { useState } from "react";
import MainView from "./views/MainView";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      username: "Bob",
      text: "Jag saknar sommaren... Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.",
      time: "12:59",
      date: new Date("2023-06-21"),
    },
    {
      id: 1,
      username: "Dave",
      text: "Är det någon som studerar till tentan? Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.",
      time: "12:59",
      date: new Date("2023-06-21"),
    },
    {
      id: 2,
      username: "Bob",
      text: "Någon som vill gå och fika? Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.",
      time: "12:59",
      date: new Date("2023-06-21"),
    },
    {
      id: 3,
      username: "Dave",
      text: "Någon som vill gå och fika? Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.",
      time: "12:59",
      date: new Date("2023-06-21"),
    },
    {
      id: 4,
      username: "Alice",
      text: "Hej alla, hoppas ni har en bra dag! Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.",
      time: "12:59",
      date: new Date("2023-06-21"),
    },
  ]);

  const addMessage = (username, text) => {
    const newMessage = {
      id: messages.length,
      username: username,
      text: text,
      time: new Date().toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return <MainView messages={messages} addMessage={addMessage} />;
};

export default App;
