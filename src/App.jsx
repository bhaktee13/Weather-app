import { useState } from "react";
import Searchbar from "./components/Searchbar";
import WeatherCard from "./components/Weathercard";
import ForecastRow from "./components/Forecastrow";
import UnitToggle from "./components/UnitToggle";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState("");

  const fetchWeather = async (searchCity, selectedUnit = unit) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setForecast([]);
    setCity(searchCity);

    const key = import.meta.env.VITE_WEATHER_KEY;

    try {
      const [wRes, fRes] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${key}&units=${selectedUnit}`,
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${key}&units=${selectedUnit}`,
        ),
      ]);

      const wData = await wRes.json();
      const fData = await fRes.json();

      console.log("city returned:", wData.name);
      console.log("status code:", wData.cod);

      if (Number(wData.cod !== 200) || !wData || !wData.name) {
        setError("City not found. Please try again.");
        return;
      }

      setWeather(wData);
      setForecast(fData.list.filter((_, i) => i % 8 === 0).slice(0, 5));
    } catch (err) {
      setError("Something went wrong. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    if (city) fetchWeather(city, newUnit);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-10 max-w-5xl mx-auto">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide drop-shadow-lg">
        🌤 Check Weather in your city!
      </h1>

      <p className="text-center text-white/50 text-xs sm:text-sm mt-2">
        Search any city to get live weather
      </p>

      <Searchbar onSearch={fetchWeather} />
      <UnitToggle unit={unit} onToggle={handleToggle} />

      <div className="mt-6 sm:mt-8">
        {loading && <Loader />}

        {error && <p className="text-center text-red-400 mt-6 text-sm">{error}</p>}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} unit={unit} />
            {forecast.length > 0 && <ForecastRow forecast={forecast} unit={unit} />}
          </>
        )}

        {!weather && !loading && !error && (
          <p className="text-center text-white/30 mt-12 sm:mt-16 text-xs sm:text-sm">
            Enter a city name above to see the weather
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
