import React from "react";
import { useEffect, useRef } from 'react';

const map = (props) => {
  const mapRef = useRef();
  const mapViewRef = useRef();

  useEffect(() => {
    const initMap = () => {

      const myLatlng = new map4d.LatLng(16.072163491469226, 108.22690536081757);
      let options = {
        center: myLatlng,
        zoom: 15,
        controls: true,
      }
      mapViewRef.current = new map4d.Map(mapRef.current, options)
    }
    initMap();
  }, []);
 
  return (

    <div>
      <div ref={mapRef} id="map" style={{  width: '750px', height: '485px', marginTop:'1px'}}>
      </div>
      {props.children}

    </div>

  )
}


export default map;
