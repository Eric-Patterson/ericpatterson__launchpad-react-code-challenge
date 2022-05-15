import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/Button";

import { getPostalDataSelector } from "../../store/selectors";
import { getPostalData } from "../../store/actions";

// needed an initialRender. Might be a better method. Could not access the postal obejct in the first render.
let isInitialRender = true;

function Postal() {
  const dispatch = useDispatch();

  const postal = useSelector(getPostalDataSelector);

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
    <div>
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
        <div>
          <p>{postal.country}</p>
          <p>{postal["post code"]}</p>
          <p>{postal.places[0].state}</p>
          <p>{postal.places[0].longitude}</p>
          <p>{postal.places[0].latitude}</p>
        </div>
      )}
    </div>
  );
}

export default Postal;
