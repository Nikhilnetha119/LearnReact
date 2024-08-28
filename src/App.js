import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './App.css';  // Import the CSS file

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapContainer = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onMarkerClick = () => {
    setSelectedPlace({ name: 'Current location' });
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyABwRiwm5ZilflHCqcpCPqmdmLw-Tj_4M0">
      <div className="map-container">  {/* Apply the CSS class */}
        <h2>Google Map</h2>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker
            position={center}
            onClick={onMarkerClick}
          />
          {selectedPlace && (
            <InfoWindow position={center} onCloseClick={onInfoWindowClose}>
              <div className="info-window">  {/* Apply the CSS class */}
                <h1>{selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapContainer;
