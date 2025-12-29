import { useEffect, useState } from "react";
import "./weatherHeader.css";

export default function WeatherHeader() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Beauvais,fr&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );

        if (!res.ok) throw new Error("Weather API error");

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // ⛔ Gestion des états
  if (loading) return <div className="weather">🌡️</div>;
  if (error || !weather?.main || !weather?.weather) return null;

  const temp = Math.round(weather.main.temp);
  const condition = weather.weather[0]?.main;
  const description = weather.weather[0]?.description;

  const iconMap = {
    Clear: "☀️",
    Clouds: "⛅",
    Rain: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Mist: "🌫️",
    Fog: "🌫️"
  };

  const icon = iconMap[condition] || "🌡️";

  return (
    <div
      className="weather"
      title={`Beauvais – ${description}`}
    >
      {icon} {temp}°C <br></br>{description}
    </div>
  );
}
