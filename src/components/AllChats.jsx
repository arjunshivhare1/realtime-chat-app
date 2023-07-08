import React, { useState } from "react";
import users from "../common/users.json";
import SearchBar from "./SearchBar";
import { Link, useParams } from "react-router-dom";

const AllChats = () => {
  const [searchedUser, setSearchedUser] = useState([]);
  const { id } = useParams();

  return (
    <div className="h-[95%] bg-[#FFFF] m-4 p-4">
      <SearchBar users={users} setSearchedUser={setSearchedUser} />
      <div className="flex flex-col gap-[15px]">
        {searchedUser?.map(({ userName, userId, profilePic }) => {
          const isActive = id === userId;
          return (
            <Link
              key={userId}
              to={`/chats/${userId}`}
              className={`flex items-center gap-[20px] text-2xl py-2 px-4 rounded-lg ${
                isActive ? "bg-[#000] text-[#FFFF]" : ""
              }`}
            >
              {<img src={profilePic} alt="profile-pic" className="h-12" />}
              {userName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllChats;
