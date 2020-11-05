import axios from "axios";
import { SET_USER, REMOVE_USER, SET_USERS } from "../constants";

const setUser = (data) => ({ type: SET_USER, payload: data });

const removeUser = () => ({ type: REMOVE_USER });

const setUsers = (data) => ({ type: SET_USERS, payload: data });

const createUser = (user) =>
  axios.post("/api/auth/users", user).then(({ data }) => console.log(data));

const loginUser = (user) => (dispatch) =>
  axios.post("/api/auth/login", user).then(({ data }) => {
    dispatch(setUser(data));
  });

const logoutUser = () => (dispatch) =>
  axios.post("/api/auth/logout").then(() => dispatch(removeUser()));

const fetchUsers = () => (dispatch) =>
  axios.get("/api/users").then(({ data }) => dispatch(setUsers(data)));

export { fetchUsers, loginUser, logoutUser, createUser };
