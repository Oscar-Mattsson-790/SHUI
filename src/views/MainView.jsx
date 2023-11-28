import React, { useState } from "react";
import MessageBoard from "../components/MessageBoard";
import MessageForm from "../components/MessageForm";
import writeMsgIcon from "../assets/Screenshot 2023-11-28 at 13.03.39.png";
import sLogo from "../assets/Screenshot 2023-11-28 at 15.45.00.png";

const MainView = ({ messages, addMessage }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddMessage = (username, text) => {
    addMessage(username, text);
    setShowForm(false);
  };

  return (
    <div className="main-view">
      <div className="shui-logo-container">
        <img src={sLogo} alt="shui logo" className="shui-log" />
      </div>
      {!showForm ? (
        <div className="message-container">
          <MessageBoard messages={messages} />
          <img
            src={writeMsgIcon}
            alt="Write message"
            className="write-msg-icon"
            onClick={() => setShowForm(true)}
          />
        </div>
      ) : (
        <MessageForm addMessage={handleAddMessage} />
      )}
      {showForm && (
        <button onClick={() => setShowForm(false)} className="toggle-view">
          Flow
        </button>
      )}
    </div>
  );
};

export default MainView;
