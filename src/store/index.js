import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts-slice";
import api from "./middleware/api";

function store() {
  return configureStore({
    reducer: { posts: postsSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  });
}

export default store;
