import { useState } from "react";

function Searchbar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!city || city.trim().length < 2) {
      alert("Please enter a valid city name");
      return;
    }
    onSearch(city);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mt-6 sm:mt-8">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-white/50 backdrop-blur-md transition-all"
      />
      <button
        onClick={handleSubmit}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition-all font-medium"
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;
