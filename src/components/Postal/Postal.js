import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { getPostalDataSelector } from "../../store/selectors";
import { getPostalData } from "../../store/actions";

import classes from "./Postal.module.css";

// needed an initialRender. Might be a better method. Could not access the postal obejct in the first render.
let isInitialRender = true;

function Postal() {
  const dispatch = useDispatch();

  const postal = useSelector(getPostalDataSelector);

  useEffect(() => {
    dispatch(getPostalData({ postalCode: "10000" }));
  }, [dispatch, postal.postalCode]);

  const postalHandler = (e) => {
    e.preventDefault();
    dispatch(
      getPostalData({
        postalCode: e.target.postalCode.value,
      })
    );
  };

  useEffect(() => {
    if (isInitialRender) {
      isInitialRender = false;
      return;
    }
  }, []);

  return (
    <div className={classes.postalContainer}>
      <form onSubmit={postalHandler}>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          name="postalCode"
          id="postalCode"
          type="number"
          defaultValue="10000"
        />
        <Button> Search Postal Code</Button>
      </form>
      {!isInitialRender && (
        <div className={classes.postalInfo}>
          <p>
            <b>Country:</b> {postal.country}
          </p>
          <p>
            <b>Postal:</b> Code: {postal["post code"]}
          </p>
          <p>
            <b>State:</b> {postal.places[0].state}
          </p>
          <p>
            <b>Long:</b> {postal.places[0].longitude}
          </p>
          <p>
            <b>Lat:</b> {postal.places[0].latitude}
          </p>
        </div>
      )}
    </div>
  );
}

export default Postal;
