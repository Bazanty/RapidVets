// components/VetLocatorMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Sample vet data for Kenya (you would fetch real data from your DB)
const kenyaVets = [
  { id: 1, name: "RapidVets Nairobi", lat: -1.286389, lng: 36.817223, address: "Upper Hill, Nairobi" },
  { id: 2, name: "RapidVets Mombasa", lat: -4.043477, lng: 39.668205, address: "Nyali, Mombasa" },
  { id: 3, name: "RapidVets Kisumu", lat: -0.102202, lng: 34.761719, address: "Milimani, Kisumu" },
  { id: 4, name: "RapidVets Nakuru", lat: -0.303099, lng: 36.080025, address: "Nakuru Town" },
  { id: 5, name: "RapidVets Eldoret", lat: 0.514277, lng: 35.269779, address: "Eldoret" },
];

export default function VetLocatorMap() {
  // Center on Nairobi, Kenya
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
        <Marker key={vet.id} position={[vet.lat, vet.lng]}>
          <Popup>
            <strong>{vet.name}</strong>
            <br />
            {vet.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}