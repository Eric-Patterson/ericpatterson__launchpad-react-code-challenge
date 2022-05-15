import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// Imports
import Navbar from "./components/NavBar/NavBar";

// Page Imports
import HomePage from "./components/Pages/HomePage";
import Universities from "./components/Pages/UniversitiesPage";
// import Postal from "./components/Pages/PostalPage";
import Postal from "./components/Postal/Postal";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/postal" element={<Postal />} />
      </Routes>
    </Fragment>
  );
}

export default App;
