// import { createStore, applyMiddleware } from "redux";
const { createStore, applyMiddleware } = require("redux");
// import thunk from "redux-thunk";
// import pkg from "redux-thunk";
// const { thunk } = pkg;
const thunk = require("redux-thunk").default;
// import axios from "axios";
const axios = require("axios");

//types

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

const initialState = {
  users: [],
  error: "",
  isLoading: false,
};

//action

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

//here payload means data
const fetchUserFail = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  };
};

//reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return { isLoading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAIL:
      return { isLoading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

// async function:

const fetchUsers = () => {
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

//store

const store = createStore(userReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
