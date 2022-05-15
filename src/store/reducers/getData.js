const initialState = {
  passengers: [],
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PASSENGERS":
      return {
        ...state,
        passengers: action.payload,
      };
    default:
      return state;
  }
};

export default getData;
