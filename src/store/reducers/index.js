import { combineReducers } from "redux";
import passengerReducer from "./passengerReducer";
import postData from "./postData";
import editData from "./editData";

const reducer = combineReducers({
  passengerReducer,
  postData,
  editData,
});

export default reducer;
