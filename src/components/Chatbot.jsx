import React from "react";

const Chatbot = ({text}) => {
  return (
    <>
    <div className="flex gap-x-4 my-10">
      <img
        src="/chat-bot-icon.png"
        alt="Chatbot Logo"
        className="w-12 h-12 rounded-full"
      />
      <div className="shadow-xl rounded-xl bg-sky-300 w-1/2 text-white text-md font-mono p-4">
        {text}
      </div>
    </div>
    </>
  );
};

export default Chatbot;
