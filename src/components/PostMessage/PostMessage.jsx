import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PostMessage.css";

export default function PostMessage({ onAddMessage }) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage({ author, content });
    setAuthor("");
    setContent("");
    navigate("/SHUI");
  };

  return (
    <div className="PostMessage">
      <h2>Låt oss baka pannkakor!</h2>
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Användarnamn"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skriv ett meddelande"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Publicera</button>
      </form>
    </div>
  );
}
