import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
import { Button, Image, Label } from "semantic-ui-react";
import data from "../utils/data";

const CountryDetailPage = () => {
  const { country } = useParams();
  const { isLoading } = useCountry();
  const navigate = useNavigate();

  const filteredData = data.filter((item) => item.name === country);
  const flag = filteredData[0].flag;
  const CounteryName = filteredData[0].name;
  const nativeName = filteredData[0].nativeName;
  const population = filteredData[0].population;
  const region = filteredData[0].region;
  const subRegion = filteredData[0].subregion;
  const capital = filteredData[0].capital;
  const topLevelDomain = filteredData[0].topLevelDomain;
  let currencies = filteredData[0].currencies;
  let languages = filteredData[0].languages;
  const border = filteredData[0].borders;

  const lang = languages
    ? languages.length > 1
      ? languages.map((item) => `${item.name}, `)
      : languages.map((item) => item.name)
    : "No Languages in this place.";

  const currency = currencies
    ? currencies.length > 1
      ? currencies.map((item) => `${item.name}, `)
      : currencies.map((item) => item.name)
    : "No currencies in this place.";

  if (isLoading) return <h1 className="container">Loading...</h1>;
  return (
    <div className="my-5">
      <div className="container">
        <Button
          className="back_btn"
          content="Back"
          icon="left arrow"
          labelPosition="left"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <Image className="img-fluid details-image" src={flag} ui={true} />
          </div>
          <div className="col-md-6">
            <div className="details-content">
              <h1>{CounteryName}</h1>
              <div className="row">
                <div className="col-md-6">
                  <p className="country_text">Native Name: {nativeName}</p>
                  <p className="country_text">
                    Population: {population.toLocaleString()}
                  </p>
                  <p className="country_text">Region: {region}</p>
                  <p className="country_text">Sub Region: {subRegion}</p>
                  <p className="country_text">Capital: {capital}</p>
                </div>
                <div className="col-md-6">
                  <p className="country_text">
                    Top Level Domain: {topLevelDomain}
                  </p>
                  <p className="country_text">Currencies: {currency}</p>
                  <p className="country_text">Languages: {lang}</p>
                </div>
              </div>
            </div>

            <div className="my-5">
              <div className="row">
                <div className="country_text ">
                  Border Countries:{" "}
                  {border
                    ? border.map((borderCountry, index) => (
                        <Label key={index} className="country_label">
                          {borderCountry}
                        </Label>
                      ))
                    : "No border in this country"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
