import { useState } from "react";

const Dash = ({ weatherData }) => {
  const [unit, setUnit] = useState("celsius");

  const getTemp = (temp, unit) => {
    return unit === "celsius"
      ? Math.round(temp - 273.15) + "°C"
      : Math.round((temp * 9) / 5 - 459.67) + "°F";
  };
  return (
    <div style={{ background: "#ADD8E6", padding: "20px" }}>
      <h1>{weatherData.name}</h1>
      <h2>
        {" "}
        {weatherData.coord.lon}
        {" , "}
        {weatherData.coord.lat}
      </h2>
      {weatherData && (
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
          className="weather-icon"
        />
      )}
      <p>
        <label htmlFor="unitType">View in Fahrenheit</label>{" "}
        <input
          type="checkbox"
          id="unitType"
          onChange={(value) =>
            setUnit(value.target.checked ? "fahrenheit" : "celsius")
          }
        />
      </p>
      <h2>
        <span>Description: {weatherData.weather[0].description}</span>
      </h2>
      <p>
        <span>Temp: {getTemp(weatherData.main.temp, unit)}</span>{" "}
      </p>
      <p>
        <span>Feels like: {getTemp(weatherData.main.feels_like, unit)}</span>{" "}
      </p>
      <p>
        <span>Pressure: {weatherData.main.pressure}</span>
        {"mb"}
      </p>
      <p>
        <span>Humidity: {weatherData.main.humidity}</span>
        {"%"}
      </p>
    </div>
  );
};

export default Dash;
