import axios from "axios";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import Map from "./components/Map";
import Loading from "./components/Loading";

function App() {
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [place, setPlace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
    params: {
      latitude: "12.91285",
      longitude: "100.87808",
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setPlace(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <RestaurantList place={place} />
        <Map setBounds={setBounds} setCoords={setCoords} coords={coords} />
      </div>
      {/* <PlaceDetails /> */}
    </div>
  );
}

export default App;
