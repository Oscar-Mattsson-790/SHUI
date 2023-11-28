const MessageBoard = ({ messages }) => (
  <div className="message-board">
    {messages.map((msg) => {
      const dayName = msg.date.toLocaleDateString("sv-SE", { weekday: "long" });
      const date = msg.date.toLocaleDateString("sv-SE", {
        day: "numeric",
        month: "short",
      });
      const time = msg.date.toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const formattedDateTime = `${dayName} ${date} ${time}`;

      return (
        <div key={msg.id} className="message">
          <div className="message-header">
            <span className="message-time">{formattedDateTime}</span>
          </div>
          <div className="message-text">{msg.text}</div>
          <span className="message-username">--- {msg.username}</span>
        </div>
      );
    })}
  </div>
);

export default MessageBoard;
