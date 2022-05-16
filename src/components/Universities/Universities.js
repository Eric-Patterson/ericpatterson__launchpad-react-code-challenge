import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityData } from "../../store/actions";
import { getUniversityDataSelector } from "../../store/selectors";

import { getCountryData } from "../../store/actions";
import { getCountryDataSelector } from "../../store/selectors";

import classes from "./Universities.module.css";

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
    <main>
      <div className={classes.searchContainer}>
        <form>
          <label>Please select a country:</label>
          <select
            onChange={(e) => {
              countryChangeHandler(e);
            }}
          >
            {countries.map((country, index) => (
              <option key={index} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className={classes.universityContainer}>
        {/* if content is empty put message, if not display data */}
        {universities.length === 0 ? (
          <h1>No Universities Available</h1>
        ) : (
          universities.map((university, index) => (
            <div key={index} className={classes.singleUni}>
              <h1>Country: {university.country}</h1>
              <hr />
              <p>
                <b>Name:</b> {university.name}
              </p>
              <p>
                <b>Website:</b>{" "}
                <a href={university.web_pages[0]}>{university.name}</a>
              </p>
            </div>
          ))
        )}
        {/* map over universities */}
        {/* {universities.map((university, index) => (
          <div key={index} className={classes.singleUni}>
            <h1>Country: {university.country}</h1>
            <hr />
            <p>
              <b>Name:</b> {university.name}
            </p>
            <p>
              <b>Website:</b>{" "}
              <a href={university.web_pages[0]}>{university.name}</a>
            </p>
          </div>
        ))} */}
      </div>
    </main>
  );
}

export default Universities;
