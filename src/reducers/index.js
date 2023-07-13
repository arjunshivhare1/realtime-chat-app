import { ADD_MESSAGE } from "../actions/index";
import { DEFAULT_MESSAGES } from "../common/constants";

const initialState = {
  ...DEFAULT_MESSAGES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { key, message } = action.payload;
      if (!message) {
        return {
          ...state,
          [key]: [...(state[key] || [])],
        };
      } else {
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
      }
    default:
      return state;
  }
};

export default reducer;
