import { useState } from "react";
import { useParams } from "react-router-dom";

const TextBar = ({ setChangeState }) => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    setMessage("");
    setChangeState((state) => !state);
  };

  return (
    <div className="py-4 bg-white">
      <div className="flex">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TextBar;
