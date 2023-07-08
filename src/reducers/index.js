import { ADD_MESSAGE } from "../actions/index";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { key, message } = action.payload;
      return {
        ...state,
        [key]: [
          ...(state[key] || []),
          {
            message,
            delivered: new Date().toISOString().split("T")[0],
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
