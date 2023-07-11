import React, { useState } from "react";
import USERS from "../common/users.json";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "../actions";

const AddConversation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((state) => !state);
  };

  return (
    <div>
      <button
        className="flex m-auto mb-4 p-2 border-2 border-[gray]"
        onClick={handleModal}
      >
        Add New Conversation
      </button>
      <PopupModal isOpen={isModalOpen} onClose={handleModal} />
    </div>
  );
};

export default AddConversation;

const PopupModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (userId) => {
    dispatch(addMessage(userId));
    navigate(`/chats/${userId}`);
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add new conversation
                </h3>
                <div className="mt-2">
                  {USERS.map(({ userName, userId, profilePic }) => (
                    <button
                      key={userId}
                      className="flex items-center gap-4 text-sm text-gray-500 mb-2"
                      onClick={() => handleClick(userId)}
                    >
                      <img
                        src={profilePic}
                        alt="profile-pic"
                        className="h-12"
                      />
                      {userName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
