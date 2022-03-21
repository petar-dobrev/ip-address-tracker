import "../index.css"
import React, {useState} from "react";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Map() {

  return (
    <div id="map">
    <MapContainer center={[43.84872, 25.9534]} zoom={12}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker   position={[43.84872, 25.9534]}/>
    </MapContainer>
    </div>
    )
}

export default Map


