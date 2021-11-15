import React, { useState, useEffect, useCallback } from "react";
import "./DeviceMap.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DeviceMap = (props) => {
  const { lastIP } = props;
  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = useCallback(() => {
    fetch(
      `https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708/${lastIP}`
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, [lastIP]);

  useEffect(() => {
    getUserGeolocationDetails();
    return () => setDetails(null);
  }, [getUserGeolocationDetails]);

  const deviceLatitude =
    details && typeof details.latitude == "number" ? details.latitude : "";
  const deviceLongitude =
    details && typeof details.longitude == "number" ? details.longitude : "";
  const cityDetails = details && details.city != null ? `${details.city},` : "";
  const countryDetails = details ? details.country_code : "";

  const mapPosition = [deviceLatitude, deviceLongitude];

  let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  Leaflet.Marker.prototype.options.icon = DefaultIcon;

 

  return (
    <>
      {deviceLatitude && deviceLongitude ? (
        <div className="map-card">
          <h4 className="map-card__title">Last Known Location</h4>

          <div>
            <MapContainer
              center={mapPosition}
              zoom={13}
              scrollWheelZoom={true}
              className="map-card__map"
              key={mapPosition}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={mapPosition} className="map-card__pin">
                <Popup>Device Location</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="map-card__details">
            <div className="map-card__longitude">
              <p className="map-card__details-title">Longitude</p>
              <p className="map-card__details-content">{deviceLongitude}</p>
            </div>
            <div className="map-card__latitude">
              <p className="map-card__details-title">Latitude</p>
              <p className="map-card__details-content">{deviceLatitude}</p>
            </div>
            <div className="map-card__location">
              <p className="map-card__details-title">Location</p>
              <p className="map-card__details-content">
                {`${cityDetails} ${countryDetails}`}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DeviceMap;
