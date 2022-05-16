import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityData } from "../../store/actions";
import { getUniversityDataSelector } from "../../store/selectors";

import { getCountryData } from "../../store/actions";
import { getCountryDataSelector } from "../../store/selectors";

function Universities() {
  const dispatch = useDispatch();

  const countries = useSelector(getCountryDataSelector);
  console.log(countries);
  const universities = useSelector(getUniversityDataSelector);
  console.log(universities);

  useEffect(() => {
    dispatch(getCountryData());
    dispatch(
      getUniversityData({
        country: "Canada",
      })
    );
  }, []);

  const countryChangeHandler = (e) => {
    dispatch(
      getUniversityData({
        country: e.target.value,
      })
    );
  };
  return (
    <div>
      <form>
        <select
          onChange={(e) => {
            countryChangeHandler(e);
          }}
        >
          <option value="">Select a Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </form>
      <h1>Universities</h1>
      {/* map over universities */}
      {universities.map((university, index) => (
        <div key={index}>
          <h2>Country: {university.country}</h2>
          <h2>Name: {university.name}</h2>
          <h2>Website: {university.web_pages[0]}</h2>
        </div>
      ))}
    </div>
  );
}

export default Universities;
