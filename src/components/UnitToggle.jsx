function UnitToggle({ unit, onToggle }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 justify-center mt-3 sm:mt-4">
      <span
        className={`text-xs sm:text-sm font-medium ${unit === "metric" ? "text-white" : "text-white/40"}`}
      >
        °C
      </span>
      <div
        onClick={onToggle}
        className="w-11 h-5 sm:w-12 sm:h-6 bg-white/20 rounded-full cursor-pointer relative transition-all"
      >
        <div
          className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300  ${unit === "metric" ? "left-0.5" : "left-6"}`}
        />
      </div>
      <span
        className={`text-xs sm:text-sm font-medium ${unit === "imperial" ? "text-white" : "text-white/40"}`}
      >
        °F
      </span>
    </div>
  );
}

export default UnitToggle;
