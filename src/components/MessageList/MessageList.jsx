import "./MessageList.css";
import Message from "../Message/Message";

export default function MessageList({ messages }) {
  return (
    <div className="MessageList">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
}
