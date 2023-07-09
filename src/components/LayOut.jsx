import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
  const [showWeather, setShowWeather] = useState(false); // New state for showing/hiding weather component

  useEffect(() => {
    getResponse();
  });

  const getResponse = async () => {
    if (!inputText) {
      setError("Please enter a location");
      return;
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=478ae5eff8b526add49eea33b05b7993&units=metric`;

    try {
      const response = await axios.get(URL);
      setDataRes(response.data);
      console.log(response.data);
      setError("");
      setShowWeather(true);
    } catch (error) {
      console.error(error);
      setError("Information Not Found (Code 404)");
      toast.error("Information Not Found (Code 404)");
      setInputText("");
      setShowWeather(false);
    }
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };
  return (
    <div className="container">
      <SocialLink/>
      <div className="row">
        <div className="col">
          <div className="container d-flex flex-column">
            <h1 className="my-2">Weather App</h1>
            <div className="input_holder">
              <Searchbar onChange={handleInputChange} btnClick={getResponse} />
              <DateCompo />

            </div>
            {error ? (
              <p className="fs-4">{error}</p> 

            ) : (
              <div className={`weather-container ${showWeather ? "show" : ""}`}>
                {showWeather && dataRes && dataRes.weather ? (
                  <Weather
                    weatherIcon={`https://openweathermap.org/img/wn/${dataRes.weather[0]?.icon}@2x.png`}
                    Itext={inputText}
                    weatherType={dataRes.weather[0]?.main}
                    humidity={dataRes.main?.humidity}
                    temp={dataRes.main?.temp}
                    wind={dataRes.wind?.speed}
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LayOut;
