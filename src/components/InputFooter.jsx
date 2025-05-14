import React from "react";
import { GoArrowUp } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
const InputFooter = ({ onSendMessages, setIsTyping}) => {
  const [input, setInput] = useState("");


    const handleKeyDown = (e) => {
        if(e.key == "Enter" && !e.shiftKey){
            e.preventDefault();
            handleSend();
        }
    };

  const handleSend = async () => {
    if (!input.trim()) return;
    onSendMessages({ role: "user", text: input });
    setInput("");
    setIsTyping(true)
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/ask/", {
        question: input,
      });
      onSendMessages({ role: "bot", text: res.data.answer });
    } catch (err) {
      
      onSendMessages({
        role: "bot",
        text: "⚠️ Error fetching response from backend.",
      });
    }
    setIsTyping(false);
  };

  return (
    <div className="flex justify-center my-4">
      <div className="bg-gray-200 p-2 flex items-center border-t shadow-lg rounded-lg w-1/2">
        <textarea
          className="w-full text-black h-16 overflow-y-auto outline-none bg-gray-200 resize-none"
          value={input}
          placeholder="Ask anything..."
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-full transition-all duration-200"
          onClick={handleSend}
        >
          <GoArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default InputFooter;
