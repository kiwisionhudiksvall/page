import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapEmbed({
  location, 
  lat,
  lon,
  width = "100%",
  height = "300px",
  title = "Karta MapEmbed",
}) {
  let coords;

  if (lat != null && lon != null) coords = [lat, lon];
  else if (location) {

    if (location.location?.lat != null && location.location?.lon != null) {
      coords = [location.location.lat, location.location.lon];
    } else if (location.latitude != null && location.longitude != null) {
      coords = [location.latitude, location.longitude];
    }
  }

  if (!coords) {
    return (
      <div
        className="map-fallback"
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          color: "#555",
          border: "1px dashed #ccc",
          borderRadius: "6px",
        }}
      >
        <span>{title}: ingen karta tillgänglig</span>
      </div>
    );
  }

  return (
    <div className="map-embed" style={{ width: "100%", height: "50vh" }}>
      <MapContainer
        center={coords}
        zoom={14}
        style={{ width: "100%", height: "50vh" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} />
      </MapContainer>
    </div>
  );
}
