import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet'; // <--- Add this line

const MapWithProvider = ({ provider, coordinates }) => {
    if (!coordinates) {
        return null;
    }
    return (
        <div>
            <MapContainer center={coordinates} zoom={13} style={{ height: '200px', width: '100%', zIndex: 0 }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates} icon={new L.Icon({
                    iconUrl: icon,
                    shadowUrl: iconShadow,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41]
                })}>
                    <Popup>{provider}</Popup>
                </Marker>
            </MapContainer>
        </div >
    );
};

export default MapWithProvider;

