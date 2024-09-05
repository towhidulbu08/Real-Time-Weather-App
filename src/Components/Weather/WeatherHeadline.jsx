import { useContext } from "react";
import Pin from "../../assets/pin.svg";
import { WeatherContext } from "../../Context";
import getFormattedDate from "../../utils/date-util";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainyIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
export default function WeatherHeadLine() {
  const { loading, error, weatherData } = useContext(WeatherContext);

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainyIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Clouds":
        return CloudIcon;
      case "Snow":
        return SnowIcon;
      case "Clear":
        return SunnyIcon;
      case "Thunder":
        return ThunderIcon;

      default:
        return SunnyIcon;
    }
  }

  const { temperature, location, time, climate } = weatherData;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}&deg;
            <span>C</span>
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
