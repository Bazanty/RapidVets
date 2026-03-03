// components/VetLocatorMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom branded orange pin icon
const brandedIcon = L.divIcon({
  className: "",
  html: `
    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 24 16 24S32 26.5 32 16C32 7.163 24.837 0 16 0z" fill="#f55c15"/>
      <circle cx="16" cy="16" r="6" fill="white"/>
    </svg>
  `,
  iconSize: [32, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -42],
});

// Sample vet data for Kenya
const kenyaVets = [
  { id: 1, name: "RapidVets Nairobi", lat: -1.286389, lng: 36.817223, address: "Upper Hill, Nairobi" },
  { id: 2, name: "RapidVets Mombasa", lat: -4.043477, lng: 39.668205, address: "Nyali, Mombasa" },
  { id: 3, name: "RapidVets Kisumu", lat: -0.102202, lng: 34.761719, address: "Milimani, Kisumu" },
  { id: 4, name: "RapidVets Nakuru", lat: -0.303099, lng: 36.080025, address: "Nakuru Town" },
  { id: 5, name: "RapidVets Eldoret", lat: 0.514277, lng: 35.269779, address: "Eldoret" },
];

export default function VetLocatorMap() {
  const position: [number, number] = [-1.286389, 36.817223];

  return (
    <MapContainer
      center={position}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kenyaVets.map((vet) => (
        <Marker key={vet.id} position={[vet.lat, vet.lng]} icon={brandedIcon}>
          <Popup>
            <div style={{ fontFamily: "sans-serif", fontSize: "13px", lineHeight: "1.6" }}>
              <strong style={{ color: "#0b224d" }}>{vet.name}</strong>
              <br />
              <span style={{ color: "#666" }}>{vet.address}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}