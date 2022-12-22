import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    
  )
);
export default store;
