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

  if (loading) return <div className="weather">🌡️</div>;
  if (error || !weather?.main || !weather?.weather) return null;

  const temp = Math.round(weather.main.temp);
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;

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

  // 🎨 Couleur selon température
  const getTempColor = (t) => {
    if (t <= 0) return "temp-freezing";
    if (t <= 10) return "temp-cold";
    if (t <= 18) return "temp-mild";
    if (t <= 25) return "temp-warm";
    return "temp-hot";
  };

  // 🏷️ Badge intelligent
  const getBadge = () => {
    if ((condition === "Clear" || condition === "Clouds") && temp >= 15) {
      return { text: "Bon moment pour sortir", class: "badge-good" };
    }

    if (condition === "Rain" || condition === "Snow" || temp < 10) {
      return { text: "Plutôt activités intérieures", class: "badge-bad" };
    }

    return { text: "Temps mitigé", class: "badge-neutral" };
  };

  const badge = getBadge();

  return (
    <div
      className={`weather ${getTempColor(temp)}`}
      title={`Beauvais – ${description}`}
    >
      <div className="weather-main">
        <span className="weather-icon">{icon}</span>
        <span className="weather-temp">{temp}°C</span>
      </div>

      <div className="weather-desc">{description}</div>

      <span className={`weather-badge ${badge.class}`}>
        {badge.text}
      </span>
    </div>
  );
}
