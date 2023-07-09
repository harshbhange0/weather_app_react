import React from "react";

function Weather({ Itext, temp, humidity, wind, weatherIcon, weatherType  }) {
  return (
     <div className="weather_holder"  >
    <div className="weather_icon_holder ">
        <img className="weather_icon" src={weatherIcon} alt=""/>
    </div>
    <div className="city_holder">
        <h4 className="city">{Itext}</h4>
    </div>
    <div className="weather_info">
        <div className="weather_type_holder">
            <span className="weather_type">{weatherType}</span>
        </div>
        <div className="weather_temp_holder">
            <span className="weather_temp">
                <i className="bi bi-thermometer-high"></i>{temp}
            </span>
        </div>
        <div className="weather_wind_holder">
            <span className="weather_wind">
                <i className="bi bi-wind"></i>
                {wind}
            </span>
        </div>
        <div className="weather_humidity_holder">
            <span className="weather_humidity">
                <i className="bi bi-moisture"></i>
                {humidity}
            </span>
        </div>
    </div>
</div>
  );
}

export default Weather;
