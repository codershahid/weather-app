import { useState } from "react";

const Dash = ({ weatherData }) => {
  const [unit, setUnit] = useState("celsius");

  const getTemp = (temp, unit) => {
    return unit === "celsius"
      ? Math.round(temp - 273.15) + "°C"
      : Math.round((temp * 9) / 5 - 459.67) + "°F";
  };
  return (
    <div>
      <h1>{weatherData.name}</h1>
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
      <p>
        <span>Temp: {getTemp(weatherData.main.temp, unit)}</span>{" "}
      </p>
      <span>Description: {weatherData.weather[0].description}</span>
    </div>
  );
};

export default Dash;
