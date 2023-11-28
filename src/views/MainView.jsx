import MessageList from "../components/MessageList/MessageList";

import "./MainView.css";

export default function MainView({ messages }) {
  return (
    <div className="Container">
      <MessageList messages={messages} />
    </div>
  );
}
