import { useState } from "react";

const MessageForm = ({ addMessage }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(username, text);
    setUsername("");
    setText("");
  };

  return (
    <>
      <div className="message-form">
        <textarea
          placeholder="Låt oss baka pannkakor!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <button type="submit" className="submit-button">
          Publicera
        </button>
      </form>
    </>
  );
};

export default MessageForm;
