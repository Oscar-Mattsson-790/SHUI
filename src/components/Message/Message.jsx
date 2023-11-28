import "./Message.css";

export default function Message({ author, content }) {
  return (
    <div className="Message">
      <p>{content}</p>
      <span>{author}</span>
    </div>
  );
}
