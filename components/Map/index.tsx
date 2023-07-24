'use client';

import {MapContainer, TileLayer, Popup, Marker} from "react-leaflet";
import { LatLngExpression } from 'leaflet';
import countries from './../../data/countries.json';
import "leaflet/dist/leaflet.css";

export default function ClientMap(){
return(
     <MapContainer 
     center={[8.761124499573636, 7.179921299294535]} 
     zoom={13} 
     scrollWheelZoom={false}
     style={{width: '100%', height:'100%'}}>
          {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
          <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker> */}
     </MapContainer>
)
}