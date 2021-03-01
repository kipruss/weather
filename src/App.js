import { useState } from 'react';
import Countries from './components/Countries';
import { defaultCountry } from './constants';
import './App.css';

function App() {
  const selectedCountry = localStorage.getItem('country') || defaultCountry;
  const selectedCity = localStorage.getItem('city') || '';

  const [country, setCountry] = useState(selectedCountry);
  const [city, setCity] = useState(selectedCity);
  const [temperature, setTemperature] = useState(null);

  const getWeather = () => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${process.env.REACT_APP_APPID}`;

      fetch(url)
        .then((response) => {
          localStorage.setItem('city', city);
          return response.json();
        })
        .then((data) => {
          const t = data?.main?.temp;
          if (Number.isFinite(t)) {
            setTemperature(Math.round(t * 10) / 10);
          } else {
            console.error('Error while getting the temperature');
          }
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChangeCountry = (code) => {
    localStorage.setItem('country', code);
    setCountry(code);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      getWeather();
    } else {
      setTemperature(null);
    }
  };

  return (
    <div className="container main">
      <div className="container wrapper">
        <div className="container">
          <Countries country={country} setCountry={handleChangeCountry} />
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="city"
              type="text"
              value={city}
              onChange={handleChangeCity}
              placeholder="Please enter your location..."
            />
            <button className="submit-button" type="submit">
              🔍
            </button>
          </form>
        </div>
        {Number.isFinite(temperature) && (
          <div className="temperature">
            {temperature}
            <sup className="degree">°C</sup>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
