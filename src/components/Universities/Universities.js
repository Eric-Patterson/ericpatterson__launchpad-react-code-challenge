import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityData } from "../../store/actions";
import { getUniversityDataSelector } from "../../store/selectors";

import { getCountryData } from "../../store/actions";
import { getCountryDataSelector } from "../../store/selectors";

// let isInitialRender = true;

function Universities() {
  const dispatch = useDispatch();

  const countries = useSelector(getCountryDataSelector);
  const universities = useSelector(getUniversityDataSelector);

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
  // console.log(selectedCountry);

  // useEffect(() => {
  //   if (isInitialRender) {
  //     isInitialRender = false;
  //     return;
  //   }
  //   dispatch(getCountryData());
  //   dispatch(
  //     getUniversityData({
  //       country: selectedCountry,
  //     })
  //   );
  // }, [dispatch, selectedCountry]);

  // useEffect(() => {
  //   dispatch(getUniversityData(selectedCountry));
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(
  //     getUniversityData({
  //       country: selectedCountry,
  //     })
  //   );
  // }, [dispatch]);

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
