import { useEffect, useState } from "react";
import Dash from "./components/dash/Dash";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import "./App.scss";

const App = ({}) => {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState(undefined);

  useEffect(() => {
    if (city) fetchWeatherData(city);
    // console.log(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  const updateCity = (city) => {
    setCity(city);
  };

  return (
    <>
      <Header />
      <Searchbar updateCity={updateCity} city={city} />
      {!weatherData ? (
        <h2>Please submit a city</h2>
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
