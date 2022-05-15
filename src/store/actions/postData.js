import axios from "axios";

// get request for post data
export const getPostData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20")
      .then((res) => {
        dispatch({
          type: "FETCH_PASSENGERS",
          payload: res.data,
        });
      });
  };
};

// post data
export const sendPostData = ({ title, body, userId }) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId,
      })
      .then((res) => {
        dispatch({
          type: "POST_DATA",
          payload: res.data,
        });
        console.log(res.data);
      });
  };
};

// EDIT(PUT) data
export const editPostData = ({ id, title, body, userId }) => {
  return (dispatch) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        body,
        userId,
      })
      .then((res) => {
        dispatch({
          type: "EDIT_DATA",
          payload: res.data,
        });
        console.log(res.data);
      });
  };
};

// delete data from api
export const deletePostData = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        dispatch({
          type: "DELETE_DATA",
          payload: res.data,
        });
        console.log(res.data);
      });
  };
};

// export const getUniversityData = () => {
//   return (dispatch) => {
//     axios
//       .get("http://universities.hipolabs.com/search?country=Canada")
//       .then((res) => {
//         dispatch({
//           type: "FETCH_UNIVERSITIES",
//           payload: res.data,
//         });
//       });
//   };
// };

// working post data
// // post data using axios
// export const sendPostData = () => {
//   return (dispatch) => {
//     axios
//       .post("https://jsonplaceholder.typicode.com/posts", {
//         title: "Fsdfd",
//         body: "ejehehehe",
//         userId: 44,
//       })
//       .then((res) => {
//         dispatch({
//           type: "POST_DATA",
//           payload: res.data,
//         });
//         console.log(res.data);
//       });
//   };
// };

// export const fetchPassengers = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch cart data.");
//       }
//       const data = await response.json();

//       return data;
//     };
//     try {
//       const data = await fetchData();

//       dispatch({ type: "FETCH_PASSENGERS", payload: data });
//     } catch (err) {
//       dispatch({ type: "FETCH_PASSENGERS_REJECTED", payload: err });
//     }
//   };
// };

// post request for post data
// export const sendPostData = (passenger) => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             title: "Fsdfd",
//             body: "ejehehehe",
//             id: 44,
//           }),
//         }
//       );
//       const data = await response.json();
//       console.log(data, "testing");

//       return data;
//     };
//     try {
//       const data = await fetchData();

//       console.log(data, "testing");
//       dispatch({ type: "POST_DATA", payload: data });
//     } catch (err) {
//       dispatch({ type: "POST_DATA_REJECTED", payload: err });
//     }
//   };
// };
