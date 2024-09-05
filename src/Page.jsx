import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./Context";

import ClearSky from "./assets/backgrounds/clear-sky.jpg";
import FewClouds from "./assets/backgrounds/few-clouds.jpg";
import Mist from "./assets/backgrounds/mist.jpeg";
import RainyDay from "./assets/backgrounds/rainy-day.jpg";
import ScatteredClouds from "./assets/backgrounds/scattered-clouds.jpg";
import Snow from "./assets/backgrounds/snow.jpg";
import Sunny from "./assets/backgrounds/sunny.jpg";
import ThunderStorm from "./assets/backgrounds/thunderstorm.jpg";
import Winter from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { loading, weatherData } = useContext(WeatherContext);
  console.log(loading);
  const [climateImage, setClimateImage] = useState("");
  console.log(weatherData.climate);

  function getBackgroundImg(climate) {
    switch (climate) {
      case "Rain":
        return RainyDay;

      case "Clouds":
        return ScatteredClouds;

      case "Snow":
        return Snow;

      case "Thunder":
        return ThunderStorm;

      case "Haze":
        return FewClouds;
      case "Clear":
        return Sunny;
      case "Fog":
        return Winter;
      case "Winter":
        return Winter;

      case "Mist":
        return Mist;

      default:
        return ClearSky;
    }
  }

  useEffect(() => {
    const bgImg = getBackgroundImg(weatherData.climate);
    setClimateImage(bgImg);
  }, [weatherData.climate]);

  return (
    <>
      {loading.status ? (
        <div className="flex  mx-auto bg-gray-200  rounded-md w-96 h-[100px]  mt-14">
          <p className="p-7 text-3xl text-center text-black">
            {loading.message}
          </p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
