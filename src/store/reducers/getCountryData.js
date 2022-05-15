const initialState = {
  countries: [],
};

const getCountryData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRY":
      return {
        ...state,
        countries: action.payload.data,
      };
    default:
      return state;
  }
};

export default getCountryData;
