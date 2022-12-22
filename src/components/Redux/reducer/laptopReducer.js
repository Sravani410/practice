import { BUY_LAPTOP } from "../action/actionTypes";

const initialState = {
  numOfLaptops: 100,
};

export const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return { numOfLaptops: state.numOfLaptops - 1 };
    default:
      return state;
  }
};
