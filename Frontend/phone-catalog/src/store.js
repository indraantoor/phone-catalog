import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window._REDUX_DEVTOOLS_EXTENSION_ !== "undefined"
    ? window._REDUX_DEVTOOLS_EXTENSION_()
    : (f) => f
);

export default store;
