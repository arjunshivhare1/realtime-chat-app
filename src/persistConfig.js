import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // key prefix for the stored state
  storage, // the storage engine to use
  // Add any additional configuration options here
};

export default persistConfig;
