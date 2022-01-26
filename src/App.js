import Header from "./components/Header";
import List from "./components/List";
import PlaceDetails from "./components/PlaceDetails";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <List />
        <Map />
      </div>
      {/* <PlaceDetails /> */}
    </div>
  );
}

export default App;
