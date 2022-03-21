import "../index.css"
import { useContext, useEffect } from "react";
import IPContext from "../context/IPContext";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Icon} from 'leaflet'

const marker = new Icon({
    iconUrl: "/icon-location.svg",
})

function Map() {
  const {locationCoordinates} = useContext(IPContext)

  return (
        <MapContainer key={locationCoordinates} center={locationCoordinates} zoom={12}scrollWheelZoom={false} >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={locationCoordinates} icon={marker}/>
        </MapContainer>
    )
}

export default Map


