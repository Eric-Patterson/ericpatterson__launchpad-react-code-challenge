// import { configureStore } from "@reduxjs/toolkit";

// // import cartSlice from "./cart-slice";
// import api from "./api";

// const store = configureStore({
//   reducer: { api: api.reducer },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./posts-slice";
import api from "./middleware/api";

export default function store() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  });
}
