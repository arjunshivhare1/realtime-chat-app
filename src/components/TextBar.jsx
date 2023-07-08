import { useState } from "react";
import { addMessage } from "../actions";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const TextBar = ({ setChangeState }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dispatch(addMessage(id, message));
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
