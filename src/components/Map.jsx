import "../index.css"
import { useContext } from "react";
import IpContext from "../context/IpContext";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Icon} from 'leaflet'

function Map() {
  const {locationCoordinates} = useContext(IpContext)
  const marker = new Icon({
    iconUrl: "/icon-location.svg",
})

  return (
            <MapContainer 
            key={locationCoordinates}
            center={locationCoordinates}
            zoom={12} 
            scrollWheelZoom={false}
            zoomControl={false}
            touchZoom={false}
            doubleClickZoom={false}
            boxZoom={false}
            keyboard={false}
            dragging={false}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={locationCoordinates} icon={marker}/>
            </MapContainer>
    )
}

export default Map


