import React, { useEffect, useState } from "react";
import generateString from "../../Shared/generateRandomString";
import Chat from "./chat";
const LivechatComponent = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    let interval = setInterval(() => {
      let chat = `${generateString(5)}: ${generateString(15)}`;
      setMessage((message) => [chat, ...message]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="col-span-2 border border-green w-[330px] h-[500px] overflow-y-auto m-1 p-1 flex flex-col-reverse">
      {message.map((message) => (
        // <Chat message={message} />
        <Chat key={message} message={message} />
      ))}
    </div>
  );
};

export default LivechatComponent;
