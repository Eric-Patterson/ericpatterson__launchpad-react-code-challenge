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
    },
  },
});

const { postsReceived } = postsSlice.actions;

const url = "/posts";

export const loadposts = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      onSuccess: postsReceived.type,
    })
  );
};

export default postsSlice;
// export default postsSlice.reducer;
