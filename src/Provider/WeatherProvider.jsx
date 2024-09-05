/* eslint-disable react/prop-types */
import { WeatherContext } from "../Context";
import { useWeather } from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
