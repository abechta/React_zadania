import { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';
import WeatherItem from './WeatherItem';
import SearchCity from './SearchCity';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataAfterFilter, setWeatherDataAfterFilter] = useState([]);

  const getWeatherData = () => {
    axios.get('https://danepubliczne.imgw.pl/api/data/synop').then((res) => {
      setWeatherData(res.data);
      setWeatherDataAfterFilter(res.data);
    });
  };

  const searchWeather = (data) => {
    const filteredData = weatherData.filter((weatherItem) =>
      weatherItem.stacja.toLowerCase().includes(data.toLowerCase())
    );

    setWeatherDataAfterFilter(filteredData);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather-container">
      <h1>Prognoza pogody</h1>
      <SearchCity searchWeather={searchWeather} />
      <div className="weatherList">
        {weatherDataAfterFilter.map((weatherItem) => {
          return (
            <WeatherItem
              weatherItem={weatherItem}
              key={weatherItem.id_stacji}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
