import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import s from "./MapLeaf.module.css";

const position = [50.4501, 30.5234];
const CustomMarker = () => {
  const svgMarker = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36">
            <path class="${s.icon}" d="M12 0C7.029 0 3 4.029 3 9c0 5.25 9 18 9 18s9-12.75 9-18c0-4.971-4.029-9-9-9zm0 14.25c-2.07 0-3.75-1.68-3.75-3.75S9.93 6.75 12 6.75s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z"/>
        </svg>
  `;

  const markerIcon = new window.L.divIcon({
    className: s.icon,
    html: svgMarker,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  });

  return (
    <Marker position={position} icon={markerIcon}>
      <Popup>Qitchen </Popup>
    </Marker>
  );
};

const MapLeaf = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className={s.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.carto.com/attributions">CartoDB</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <CustomMarker position={position} />
    </MapContainer>
  );
};

export default MapLeaf;
