import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ coords }) => {
  // const map = useMap();
  const L = window.L;

  return (
    <MapContainer className="map-container" center={[coords.lat, coords.lng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      <Marker position={[coords.lat, coords.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
