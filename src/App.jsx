import "./App.css";
import Page from "./Page";
import { FavoriteProvider, LocationProvider } from "./Provider";
import { WeatherProvider } from "./Provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
