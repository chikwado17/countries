import React from "react";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import CountryDetails from "./CountryDetails";
import { useCountry } from "../context/CountryContext";
import ErrorMessage from "./ErrorMessage";

const CountryList = () => {
  const { countries, isLoading, error } = useCountry();

  // console.log(country);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="my-5">
      <Grid stackable className="country_list" columns={4}>
        <GridRow>
          {!isLoading &&
            !error &&
            countries?.map((countr, index) => (
              <GridColumn key={index}>
                <CountryDetails country={countr} key={index} />
              </GridColumn>
            ))}
        </GridRow>
      </Grid>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default CountryList;
