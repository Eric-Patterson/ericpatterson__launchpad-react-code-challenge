import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
export const apiCallBegan = createAction("api/callBegan");

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);
    const { onSuccess } = action.payload;
    try {
      const response = await axios.request({
        url: "https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20",
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
export default api;
