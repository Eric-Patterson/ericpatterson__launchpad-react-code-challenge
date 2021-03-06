import { combineReducers } from "redux";
import getData from "./getData";
import postData from "./postData";
import editData from "./editData";
import getUniversityData from "./getUniversityData";
import getCountryData from "./getCountryData";
import getPostalData from "./getPostalData";

const reducer = combineReducers({
  getData,
  postData,
  editData,
  getUniversityData,
  getCountryData,
  getPostalData,
});

export default reducer;
