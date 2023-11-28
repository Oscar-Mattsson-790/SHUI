import MessageList from "../components/MessageList/MessageList";
import MessageInput from "../components/MessageInput/MessageInput";
import "./MainView.css";
import { Link } from "react-router-dom";

export default function MainView({ messages }) {
  return (
    <div className="Container">
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
}
