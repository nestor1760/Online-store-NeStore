import { applyMiddleware, combineReducers, createStore } from "redux";
import { shopReducer } from "./shopReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  products: shopReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))