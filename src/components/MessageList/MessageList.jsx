import "./MessageList.css";
import Message from "../Message/Message";

export default function MessageList() {
  const messages = [
    {
      id: 1,
      author: "Snodden",
      content: "Saker händer här och där. Eftersökningar pågår...",
    },
    {
      id: 2,
      author: "Lindberg",
      content: "Nytt möte planerat för nästa vecka. Håll er uppdaterade!",
    },
    {
      id: 3,
      author: "Björnsson",
      content: "Projektet går framåt. Vi behöver mer feedback.",
    },
    {
      id: 4,
      author: "Åkerman",
      content: "Glöm inte bort deadline för rapporten imorgon!",
    },
    {
      id: 5,
      author: "Svensson",
      content: "Kaffemaskinen är trasig igen. Någon som kan fixa?",
    },
  ];

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
