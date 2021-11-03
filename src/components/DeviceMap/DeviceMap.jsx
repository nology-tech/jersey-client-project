import React, { useState } from "react";
import "./DeviceMap.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DeviceMap = () => {
  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708/152.15.152.50"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };
  console.log(details);
  return (
    <>
      <button onClick={getUserGeolocationDetails}>Click</button>
      <div className="map-card">
        <h4 className="map-card__title">Last Known Location</h4>

        <div>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
            className="map-card__map"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="map-card__details">
          <div className="map-card__longitude">
            <p className="map-card__details-title">Longitude</p>
            <p className="map-card__details-content">159.5398</p>
          </div>
          <div className="map-card__latitude">
            <p className="map-card__details-title">Latitude</p>
            <p className="map-card__details-content">75.3913</p>
          </div>
          <div className="map-card__location">
            <p className="map-card__details-title">Location</p>
            <p className="map-card__details-content">London, UK</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceMap;
