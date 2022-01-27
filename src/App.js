import axios from "axios";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import Map from "./components/Map";
import Loading from "./components/Loading";

function App() {
  const [coords, setCoords] = useState({ lat: 48.79229469769332, lng: 9.182192728127392 });
  const [place, setPlace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [autocomplete, setAutocomplete] = useState("");
  const [query, setQuery] = useState("");

  const restaurants = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
    params: {
      latitude: coords.lat,
      longitude: coords.lng,
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(restaurants)
      .then(function (response) {
        setPlace(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
      });
  }, [coords]);

  const fetchSearchTerm = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/locations/search",
    params: {
      query: query,
      offset: "0",
      sort: "relevance",
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "7764e399d8msh8b52c7ec105f2b2p1ebac6jsnb7eee2d8c420",
    },
  };

  useEffect(() => {
    axios
      .request(fetchSearchTerm)
      .then(function (response) {
        setAutocomplete(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }
  console.log(coords);
  return (
    <div className="App">
      <Header autocomplete={autocomplete} query={query} setQuery={setQuery} setCoords={setCoords} />
      <div className="main-container">
        <RestaurantList place={place} setCoords={setCoords} coords={coords} />
        <Map coords={coords} setCoords={setCoords} autocomplete={autocomplete} />
      </div>
      {/* <PlaceDetails /> */}
    </div>
  );
}

export default App;
