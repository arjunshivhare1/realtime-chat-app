import React, { useEffect, useRef } from "react";
import TextBar from "./TextBar";

const Conversation = ({ userName, chats = [], setChangeState }) => {
  const latestMessageRef = useRef(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="h-[100%] flex flex-col bg-gray-100">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        {chats.length ? (
          <div className="max-w-xl ml-auto">
            {chats?.map((chat, index) => (
              <div
                key={index}
                ref={index === chats.length - 1 ? latestMessageRef : null}
                className="flex flex-col gap-[10px] mb-4 p-4 bg-white rounded shadow"
              >
                <p className="text-gray-700">{chat.message}</p>
                <p className="text-gray-500 text-sm">{chat.delivered}</p>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-3xl font-bold underline flex justify-center">
            No messages found
          </h1>
        )}
      </div>
      <TextBar setChangeState={setChangeState} />
    </div>
  );
};

export default Conversation;
