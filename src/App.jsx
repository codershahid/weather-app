import { useEffect } from "react";
import Dash from "./Components/Dash/Dash";
import Header from "./Components/Header/Header";
import { useState } from "react";

const App = ({ city }) => {
  const [weatherData, setWeatherData] = useState(undefined);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    const data = await response.json();
    console.log("dataCode", data.cod);
    console.log(data);
    setWeatherData(data);
  };

  console.log("weatherDataState", weatherData);

  return (
    <>
      <h3>Weather-App</h3>
      <Header />

      {!weatherData ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {weatherData.cod != 200 ? (
            <>
              {weatherData && (
                <h2>Something went wrong: {weatherData.message}</h2>
              )}
            </>
          ) : (
            <Dash weatherData={weatherData} />
          )}
        </>
      )}
    </>
  );
};

export default App;
