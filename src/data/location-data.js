const data = [
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Toronto",
    latitude: 43.651,
    longitude: -79.347,
  },
  {
    location: "Singapore",
    latitude: 1.29027,
    longitude: 103.851959,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Barishal",
    latitude: 22.701,
    longitude: 90.3535,
  },
  {
    location: "Mecca",
    latitude: 21.42251,
    longitude: 39.826168,
  },
  {
    location: "Jerusalem",
    latitude: 31.7683,
    longitude: 35.2137,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };

    return defaultLocation;
  }
}
export { getLocationByName, getLocations };
