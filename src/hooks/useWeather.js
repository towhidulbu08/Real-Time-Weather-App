/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../Context";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationContext);

  const fetchWeatherData = async (longitude, latitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fetching Weather Data",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      console.log(response);
      if (!response.ok) {
        const errorMessage = `Fetching Weather Data Failed :${response.status}`;

        throw Error(errorMessage);
      }

      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      status: true,
      message: "Finding Location...",
    });
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.longitude, selectedLocation.latitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.longitude, position.coords.latitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    loading,
    error,
  };
};
