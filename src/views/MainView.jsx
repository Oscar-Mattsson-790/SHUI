import MessageList from "../components/MessageList/MessageList";
import MessageInput from "../components/MessageInput/MessageInput";
import "./MainView.css";

export default function MainView() {
  return (
    <div className="Container">
      <MessageList />
      <MessageInput />
    </div>
  );
}
