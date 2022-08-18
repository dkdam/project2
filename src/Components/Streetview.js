import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';
import Timer from './Timer';
import { locationCoordinates } from './Locations';
import Round from './Round';

const containerStyle = {
  width: '1000px',
  height: '600px'
};
export let coordinates = locationCoordinates; // Get coordinates

function MyComponent({ locationNumber, round }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  const panoOptions = {
    pov: {
      heading: 20,
      pitch: 2,
    },
    disableDefaultUI: true,
    visible: true
  }

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        addressControl={false}
      >
        <StreetViewPanorama
        position={ locationCoordinates[locationNumber][0] }
        options={panoOptions}
    />
      </GoogleMap>
        <div className="timer">
          <Timer />
        </div>
   </div>
  ) : <></>
}

export default React.memo(MyComponent);