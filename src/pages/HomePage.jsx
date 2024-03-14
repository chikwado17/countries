import React from "react";
import CountryActions from "../components/CountryActions";
import CountryList from "../components/CountryList";

const HomePage = () => {
  return (
    <div className="container my-5">
      <CountryActions />
      <CountryList />
    </div>
  );
};

export default HomePage;
