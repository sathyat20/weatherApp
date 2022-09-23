import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Results from "./components/results/Results";

export const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      <Header />
      <Search setWeatherData={setWeatherData} />
      <Results weatherData={weatherData} />
    </div>
  );
};
