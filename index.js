// import { combineReducers, createStore, applyMiddleware } from "redux";
const { createStore, combineReducers, applyMiddleware } = require("redux");
const logger = require("redux-logger").default;
// ----> this will show error because we can't like this because it(this app) is a commonJS syntax
// import pkg from "redux-logger";
// const { logger } = pkg;

// action types:
const BUY_LAPTOP = "BUY_LAPTOP";
const BUY_MOBILE = "BUY_MOBILE";

// redux store
const initialState = {
  numOfLaptops: 100,
};
// before the changing it will still same in the numofmobiles option
const initialMobile = {
  numOfMobiles: 1000,
};

// action
const buyLaptop = () => {
  return {
    type: BUY_LAPTOP,
  };
};
const buyMobile = () => {
  return {
    type: BUY_MOBILE,
  };
};

// reducer

const laptopReducer = (state = initialState, action) => {
  //   if (action.type === "BUY_LAPTOP") {
  //     return { numOfLaptops: state.numOfLaptops - 1 };
  //   }
  //   else{
  //     return state;
  //   }
  switch (action.type) {
    case BUY_LAPTOP:
      return { numOfLaptop: state.numOfLaptops - 1 };
    default:
      return state;
  }
};

const mobileReducer = (state = initialMobile, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      // after the change the reducer through the action
      return { numOfMobile: state.numOfMobiles - 1 };
    default:
      return state;
  }
};

// we can't be the different reducer with different stores for that we are using the combineReducer
const rootStore = combineReducers({
  Laptops: laptopReducer,
  Mobiles: mobileReducer,
});
const store = createStore(rootStore, applyMiddleware(logger));
// console.log(store);

// subscribe() just lets you know every time the store changes.
//  If you're writing a react-redux application then you never need it because react-redux does this for you.

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));
// this dispatch will effect the previousstate and currentstate because of the reducers

//output should be because of this action performance
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
