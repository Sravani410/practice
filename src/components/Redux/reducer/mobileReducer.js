import { BUY_MOBILE } from "../action/actionTypes";

const initialState = {
  numOfMobiles: 1000,
};

export const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      return { numOfMobiles: state.numOfMobiles - 1 };
    default:
      return state;
  }
};
