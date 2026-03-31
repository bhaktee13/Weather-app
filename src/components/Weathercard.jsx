function Weathercard({ weather, unit }) {
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const unitSymbol = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className="mt-6 w-full max-w-md mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 sm:p-6 text-white">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{weather.name}</h2>
          <p className="text-white/60 text-sm mt-1">{weather.sys.country}</p>
          <p className="capitalize text-white/80 mt-2">{weather.weather[0].description}</p>
        </div>
        <img src={icon} alt="weather icon" className="w-12 h-12 sm:w-16 sm:h-16" />
      </div>

      <div className="mt-4">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
          {Math.round(weather.main.temp)}
          {unitSymbol}
        </p>
        <p className="text-white/60 text-sm mt-1">
          Feels like {Math.round(weather.main.feels_like)}
          {unitSymbol}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-white/50 text-xs">Humidity</p>
          <p className="text-lg font-medium mt-1">{weather.main.humidity}%</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-white/50 text-xs">Wind</p>
          <p className="text-lg font-medium mt-1">
            {weather.wind.speed} {windUnit}
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-white/50 text-xs">Pressure</p>
          <p className="text-base sm:text-lg font-medium mt-1">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default Weathercard;
