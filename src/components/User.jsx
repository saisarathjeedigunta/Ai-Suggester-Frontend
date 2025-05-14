import React from "react";

const User = ({text}) => {
  return (
      <div className="flex justify-end bg-violet-300 shadow-xl rounded-xl  mx-4 text-white text-md w-1/3 p-4 ml-auto font-mono">
        <span className="text-left w-full font-medium">{text}</span>
      </div>
  );
};

export default User;
