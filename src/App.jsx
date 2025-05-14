import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import User from "./components/User";
import InputFooter from "./components/InputFooter";
import { useState } from "react";
export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "✈️ Hello! I'm your Travel Assistant. How can I help you plan your next adventure?\n🌍 Need suggestions on destinations? Or maybe you're interested in local attractions? Just ask away!",
    },
  ]);
  const handleNewMessage = (msg) => {
    setMessages((prev) => [...prev, msg])
  }
  const[isTyping, setIsTyping] = useState(false)
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div className="flex-grow overflow-y-auto px-2 py-2 space-y-4">
        {messages.map((msg, idx) =>
          msg.role == "bot" ? (
            <Chatbot key={idx} text={msg.text} />
          ) : (
            <User key={idx} text={msg.text} />
          )
        )}
        {isTyping && <Chatbot key="typing" text={"..."}/>}
      </div>
      <InputFooter onSendMessages={handleNewMessage} setIsTyping = {setIsTyping}></InputFooter>
    </div>
  );
}
