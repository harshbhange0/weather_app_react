import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Searchbar";
import DateCompo from "./DateCompo";
import Weather from "./Weather";
import axios from "axios";
import SocialLink from "./SocialLink ";

function LayOut() {
  const [inputText, setInputText] = useState("");
  const [dataRes, setDataRes] = useState(null);
  const [error, setError] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = async () => {
    if (!inputText) {
      setError("Please enter a location");
      return;
    } else {
      toast.info("Fetching weather information... btn");
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=478ae5eff8b526add49eea33b05b7993&units=metric`;

    try {
      setIsLoading(true);
      const response = await axios.get(URL);
      setDataRes(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Information Not Found (Code 404) try");
      setDataRes(null);
      if (error) {
        toast.warning("Please enter a valid location try");
      }
      toast.error("Information Not Found (Code 404) try");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonClick = () => {
    getResponse();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWeather(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <SocialLink />
      <div className="row">
        <div className="col">
          <div className="container d-flex flex-column">
            <h1 className="my-2">Weather App</h1>
            <div className="input_holder">
              <Searchbar
                onChange={handleInputChange}
                btnClick={handleButtonClick}
              />
              <DateCompo />
            </div>
            {isLoading && (
              <p className="fs-4">Fetching weather information...</p>
            )}
            {!isLoading && showWeather && dataRes && dataRes.weather ? (
              <div className="weather-container show">
                <Weather
                  weatherIcon={`https://openweathermap.org/img/wn/${dataRes.weather[0]?.icon}@2x.png`}
                  Itext={inputText}
                  weatherType={dataRes.weather[0]?.main}
                  humidity={dataRes.main?.humidity}
                  temp={dataRes.main?.temp}
                  wind={dataRes.wind?.speed}
                />
              </div>
            ) : (
              <p className="fs-4">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayOut;
