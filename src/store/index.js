import { configureStore } from "@reduxjs/toolkit";
import { api } from "./middleware/api";
import postsSlice from "./posts-slice";

function store() {
  return configureStore({
    reducer: { posts: postsSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  });
}

export default store;
