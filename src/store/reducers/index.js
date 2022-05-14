import { combineReducers } from "redux";
import passengerReducer from "./passengerReducer";
import postData from "./postData";

const reducer = combineReducers({
  passengerReducer,
  postData,
});

export default reducer;
