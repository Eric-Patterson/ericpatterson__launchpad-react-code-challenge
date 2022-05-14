const initialState = {
  postData: [],
};

const postData = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DATA":
      return {
        ...state,
        postData: action.payload,
      };
    default:
      return state;
  }
};

export default postData;
