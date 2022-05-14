const initialState = {
  postData: [],
};

const editPostData = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_DATA":
      return {
        ...state,
        postData: action.payload,
      };
    default:
      return state;
  }
};

export default editPostData;
