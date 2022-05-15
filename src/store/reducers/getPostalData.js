const initialState = {
  postalCode: [],
};

const getPostalData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTAL_CODE":
      return {
        ...state,
        postalCode: action.payload,
      };
    default:
      return state;
  }
};

export default getPostalData;
