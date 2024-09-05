/* eslint-disable react/prop-types */
import { FavoriteContext } from "../Context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorites([...favorites, { latitude, longitude, location }]);
  };

  const removeFavorite = (location) => {
    const restFav = favorites.filter((fav) => fav.location !== location);

    setFavorites([...restFav]);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
