import axios from "axios";

// async axios request for postal data
export const getPostalData = ({ postalCode }) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.zippopotam.us/us/${postalCode}`);
    console.log(res.data);
    dispatch({
      type: "FETCH_POSTAL_CODE",
      payload: res.data,
    });
  };
};
