import axios from "axios";

// get request for post data
export const getUniversityData = ({ country }) => {
  return (dispatch) => {
    axios
      .get(`http://universities.hipolabs.com/search?country=${country}`)
      .then((res) => {
        dispatch({
          type: "FETCH_UNIVERSITIES",
          payload: res.data,
        });
      });
  };
};
// export const getUniversityData = ({ country }) => {
//   return (dispatch) => {
//     if (country === "") {
//       dispatch(
//         getUniversityData({
//           country: "",
//         })
//       );
//     } else {
//       axios
//         .get(`http://universities.hipolabs.com/search?country=${country}`)
//         .then((res) => {
//           dispatch({
//             type: "FETCH_UNIVERSITIES",
//             payload: res.data,
//           });
//         });
//     }
//   };
// };
