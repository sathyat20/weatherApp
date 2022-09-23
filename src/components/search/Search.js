import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Search = ({ setWeatherData }) => {
  const [term, setTerm] = useState();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: API_KEY,
            q: term,
          },
        }
      );
      setWeatherData(data);
    };
    const timeOutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  return (
    <div class="ui category search" id="search-style">
      <div class="ui icon input" id="search-bar">
        <input
          class="prompt"
          type="text"
          placeholder="Search cities..."
          onChange={(e) => setTerm(e.target.value)}
        />
        <i class="search icon"></i>
      </div>
      <div class="results"></div>
    </div>
  );
};

export default Search;
