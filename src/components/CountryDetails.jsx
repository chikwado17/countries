import React from "react";
import { Link } from "react-router-dom";
import {
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from "semantic-ui-react";
import { useTheme } from "../context/ThemeContext";

const CountryDetails = ({ country }) => {
  const { themeMode } = useTheme();
  return (
    <Link to={`/${country.name.common}`}>
      <Card className={`country_card ${themeMode ? "dark-card" : ""}`}>
        <Image
          className="img-fluid country-img"
          src={country.flags.png}
          ui={true}
        />
        <CardContent>
          <CardHeader
            className={`country_header ${themeMode ? "h2-dark" : ""}`}
          >
            {country.name.common}
          </CardHeader>

          <CardDescription>
            <p>
              <span className={`country_text ${themeMode ? "h2-dark" : ""}`}>
                Population:
              </span>{" "}
              {country.population}
            </p>
            <p>
              <span className={`country_text ${themeMode ? "h2-dark" : ""}`}>
                Region:
              </span>{" "}
              {country.region}
            </p>
            <p>
              <span className={`country_text ${themeMode ? "h2-dark" : ""}`}>
                Capital:
              </span>{" "}
              {country.capital}
            </p>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryDetails;
