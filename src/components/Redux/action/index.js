import {
  BUY_LAPTOP,
  BUY_MOBILE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "./actionTypes";
import axios from "axios";

export const buyLaptop = () => {
  return {
    type: BUY_LAPTOP,
  };
};
export const buyMobile = () => {
  return {
    type: BUY_MOBILE,
  };
};
export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
//here payload means data
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFail = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  };
};

export const fetchUsers = () => {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    //here we are not using backend so we have to use the header
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      })
      .then((res) => {
        let users = res.data.map((e) => e.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error));
      });
  };
};
