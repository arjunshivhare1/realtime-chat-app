import { useEffect, useState } from "react";

const SearchBar = (props) => {
  const { users, setSearchedUser } = props;
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchedUser(users);
  }, []);

  const filteredConversations = (e) => {
    const searchQuery = e.target.value;
    setSearchValue(searchQuery);
    const filteredUser = users.filter(({ userName }) =>
      userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedUser(filteredUser);
  };

  return (
    <input
      type="text"
      className="w-full h-12 rounded px-3 text-lg bg-[#dddd] mb-8"
      value={searchValue}
      placeholder="Search..."
      onChange={filteredConversations}
    />
  );
};

export default SearchBar;
