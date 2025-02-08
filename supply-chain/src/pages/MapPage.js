import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const position = [51.505, -0.09]; // Default coordinates (London)

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A sample marker on OpenStreetMap using Leaflet.js.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
