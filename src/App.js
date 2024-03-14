import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { themeMode } = useTheme();
  const bodyClass = themeMode ? "dark-mode" : ""; // Determine body class based on darkMode state

  return (
    <div className={bodyClass}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:country" element={<CountryDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
