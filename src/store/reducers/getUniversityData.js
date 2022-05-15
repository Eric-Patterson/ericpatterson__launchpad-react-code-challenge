const initialState = {
  universities: [],
};

const getUniversityData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_UNIVERSITIES":
      return {
        ...state,
        universities: action.payload,
      };
    default:
      return state;
  }
};

export default getUniversityData;
