import React, { useEffect, useState } from "react";
import "./Results.css";

const Results = ({ weatherData }) => {
  const [location, setLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  useEffect(() => {
    const weatherLocation = weatherData.location;
    const weatherCurrent = weatherData.current;

    setLocation(weatherLocation);
    setCurrentWeather(weatherCurrent);
  }, [weatherData]);

  console.log("currentWeather: ", currentWeather);

  return (
    <div>
      {weatherData.length != 0 ? (
        <div className="weather">
          <div className="top">
            <div>
              <p className="city">
                {location?.name}, {location?.country}
              </p>
              <p className="weather-description">
                {currentWeather?.condition.text}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={currentWeather?.condition.icon}
            />
          </div>
          <div className="bottom">
            <div className="">
              <p className="temperature">{currentWeather?.temp_c}°C</p>
              <hr></hr>
              <p className="temperature">{currentWeather?.temp_f}°F</p>
            </div>
            <div className="details">
              <div className="parameter-row">
                <span className="parameter-label" id="details-font">Details</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">
                  {currentWeather?.feelslike_c} /{currentWeather?.feelslike_f}
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">
                  {currentWeather?.wind_kph}km/hr
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">
                  {currentWeather?.humidity}%
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Pressure (inches)</span>
                <span className="parameter-value">
                  {currentWeather?.pressure_in}
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Local time</span>
                <span className="parameter-value">{location?.localtime}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Results;