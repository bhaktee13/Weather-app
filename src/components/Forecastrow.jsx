function Forecastrow({ forecast, unit }) {
  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-md flex gap-3 overflow-x-auto justify-center sm:grid sm:grid-cols-5 sm:gap-2">
        {forecast.map((item, i) => {
          const day = new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "short" });

          const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

          return (
            <div
              key={i}
              className="min-w-[70px] sm:min-w-0 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-2 sm:p-3 text-center text-white"
            >
              <p className="text-xs text-white/60">{day}</p>

              <img src={icon} alt="icon" className="w-7 h-7 sm:w-8 sm:h-8 mx-auto" />

              <p className="text-xs sm:text-sm font-medium">
                {Math.round(item.main.temp)}
                {unitSymbol}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecastrow;
