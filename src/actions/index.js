export const ADD_MESSAGE = "ADD_MESSAGE";
export const addMessage = (id, message) => ({
  type: ADD_MESSAGE,
  payload: {
    key: id,
    message,
  },
});
