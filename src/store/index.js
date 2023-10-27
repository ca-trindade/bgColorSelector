import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { bgReducer } from "./colorSetup";

export const rootReducer = combineReducers({
  backgroundColor: bgReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
