import axios from "axios";

// get request for post data
export const getCountryData = () => {
  return (dispatch) => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/info?returns=none")
      .then((res) => {
        dispatch({
          type: "FETCH_COUNTRY",
          payload: res.data,
        });
      });
  };
};
