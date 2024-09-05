import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../Context";

export default function AddToFavorite() {
  const { addToFavorite, removeFavorite, favorites } =
    useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavorite, toggleFavorite] = useState(false);

  const { latitude, longitude, location } = weatherData;
  console.log(location);

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);

    toggleFavorite(found);
  }, [favorites, location]);

  function handleFavorites() {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFavorite(location);
    }
    toggleFavorite(!isFavorite);
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
