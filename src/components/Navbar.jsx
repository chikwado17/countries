import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { themeMode, toggleThemeChange } = useTheme();

  return (
    <nav className={`navbar ${themeMode ? "bg-dark" : "bg-body-tertiary"}`}>
      <div className="container">
        <h1 className={`navbar-brand mb-0 h1`}>
          <Link className={`${themeMode ? "h1-dark" : ""}`} to="/">
            Where in the world?
          </Link>
        </h1>

        <div className="navbar-theme" onClick={() => toggleThemeChange()}>
          {themeMode ? (
            <>
              <ion-icon name="moon"></ion-icon>
              <label htmlFor="">Light mode</label>
            </>
          ) : (
            <>
              <ion-icon name="moon-outline"></ion-icon>
              <label htmlFor="">Dark mode</label>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
