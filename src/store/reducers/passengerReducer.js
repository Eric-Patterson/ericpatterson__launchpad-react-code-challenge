const initialState = {
  passengers: [],
};

const passengerReducer = (state = initialState, action) => {
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

export default passengerReducer;
