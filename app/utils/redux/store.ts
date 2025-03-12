import { legacy_createStore as createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension"; // Import composeWithDevTools
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
  order: orderReducer,
});

const store = createStore(
  rootReducer,
  // composeWithDevTools() // Use composeWithDevTools here
);

export default store;