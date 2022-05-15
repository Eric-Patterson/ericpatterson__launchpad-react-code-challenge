import axios from "axios";

// get request for post data
export const getUniversityData = () => {
  return (dispatch) => {
    axios
      .get("http://universities.hipolabs.com/search?country=Canada")
      .then((res) => {
        dispatch({
          type: "FETCH_UNIVERSITIES",
          payload: res.data,
        });
      });
  };
};
