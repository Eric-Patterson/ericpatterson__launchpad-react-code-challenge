import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./middleware/api";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: false,
  },

  reducers: {
    postsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      console.log("postsReceived");
    },
    addItemToApi(state, action) {
      state.list.push(action.payload);
      console.log("sent items");
    },
  },
});

const { postsReceived } = postsSlice.actions;

export const loadposts = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      onSuccess: postsReceived.type,
    })
  );
};

export const postActions = postsSlice.actions;

export default postsSlice;
