import { createStore, combineReducers, applyMiddleware } from "redux";
import { laptopReducer } from "./reducer/laptopReducer";
import { mobileReducer } from "./reducer/mobileReducer";
import userReducer from "../Redux/reducer/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
  users: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
