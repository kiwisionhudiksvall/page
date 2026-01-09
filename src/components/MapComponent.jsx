import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapEmbed({ lat, lon, location, src, title, width = "100%", height = "300px", loading = "lazy" }) {
  if (src) {
    return (
      <div className="map-embed" style={{ width, height }}>
        <iframe
          title={title || "map"}
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading={loading}
        />
      </div>
    );
  }

  let coords;
  if (lat != null && lon != null) coords = [lat, lon];
  else if (location) {
    const fields = location.fields || {};
    if (fields.lat && fields.lon) coords = [fields.lat, fields.lon];
    else if (fields.latitude && fields.longitude) coords = [fields.latitude, fields.longitude];
    else if (fields.location && (fields.location.lat || fields.location.lon)) coords = [fields.location.lat, fields.location.lon];
    else if (fields.coordinates && Array.isArray(fields.coordinates)) coords = fields.coordinates;
  }

  if (!coords)
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
          color: "#333",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0 }}>Ingen karta tillgänglig</p>
      </div>
    );

  return (
    <MapContainer center={coords} zoom={14} style={{ height, width }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coords} />
    </MapContainer>
  );
}

export default function MapComponent({ mapsOffices, map, location }) {
  const mapData = mapsOffices || map;

  // If a single Contentful location is passed directly, render it as a single map
  if (location) {
    return (
      <section className="maps">
        <div className="map-single">
          <MapEmbed location={location} />
        </div>
      </section>
    );
  }

  // If no map data is provided at all (or an empty array), show a small fallback so the UI isn't empty
  if (!mapData || (Array.isArray(mapData) && mapData.length === 0)) {
    return (
      <section className="maps">
        <div
          className="map-fallback"
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f9f9f9",
            color: "#666",
            border: "4px dashed #e0e0e0",
            borderRadius: "8px",
          }}
        >
          <p style={{ margin: 0, color: "#666" }}>Ingen karta tillgänglig</p>
        </div>
      </section>
    );
  }

  return (
    <section className="maps">
      {mapData && (
        <div className="map-container">
        {mapData.map((table, tableIndex) => (
          <div key={tableIndex} className="map-table">
            {table.map((row, rowIndex) => (
              <div key={rowIndex} className="map-row">
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} className="map-cell">
                    {cell.text && <p>{cell.text}</p>}

                    {cell.map && (
                      <MapEmbed
                        title={cell.map.title}
                        lat={cell.map.lat}
                        lon={cell.map.lon}
                        width="250px"
                        height="250px"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        </div>
      )}
      </section>
  );}

export function MapTables({ tables }) {
  return (
      <section className="maps">

      {tables && (
        <div className="map-container">

        {tables.map((table, tableIndex) => (
          <div key={tableIndex} className="map-table">

            {table.map((row, rowIndex) => (
              <div key={rowIndex} className="map-row">

                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} className="map-cell">

                    {cell.text && <p>{cell.text}</p>}
                    {cell.map && (
                      <MapEmbed
                        title={cell.map.title}
                        lat={cell.map.lat}
                        lon={cell.map.lon}
                        width="250px"
                        height="250px"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        </div>
      )}
      </section>
  );
}