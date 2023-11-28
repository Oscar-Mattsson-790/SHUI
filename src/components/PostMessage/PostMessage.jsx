import "./PostMessage.css";

export default function PostMessage() {
  return (
    <div className="PostMessage">
      <h2>Låt oss baka pannkakor!</h2>
      <div className="input-wrapper">
        <input type="text" placeholder="Användarnamn" />
        <button>Publicera</button>
      </div>
    </div>
  );
}
