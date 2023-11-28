import "./MessageInput.css";

export default function MessageInput() {
  return (
    <div className="MessageInput">
      <input type="text" placeholder="Write msg" />
      <button>Send</button>
    </div>
  );
}
