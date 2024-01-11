import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { USERS } from "../common/constants";
import AllChats from "../components/AllChats";
import Conversation from "../components/Conversation";

const Chats = () => {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState({});
  const [changeState, setChangeState] = useState(false);

  useEffect(() => {
    const userData = USERS.find((user) => user.userId === id);
    setSelectedUser(userData);
  }, [id]);

  return (
    <div className="w-screen h-screen bg-[#dddd] flex">
      <div className="w-[25%] overflow-hidden">
        <AllChats activeChats={{}} />
      </div>
      <div className="w-[74%] h-[95%] bg-[#FFFF] my-4 p-4">
        {!id ? (
          <h1 className="text-3xl font-bold underline flex justify-center">
            Please select a chat!
          </h1>
        ) : !selectedUser?.userName ? (
          <h1 className="text-3xl font-bold underline flex justify-center">
            Please select a valid user!
          </h1>
        ) : (
          <Conversation
            userName={selectedUser?.userName}
            chats={[]}
            setChangeState={setChangeState}
          />
        )}
      </div>
    </div>
  );
};

export default Chats;
