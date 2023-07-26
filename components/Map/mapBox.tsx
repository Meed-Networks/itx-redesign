import "mapbox-gl/dist/mapbox-gl.css";
import {useState} from "react";
import ReactMapGl, {Layer} from 'react-map-gl';

const TOKEN = process.env.NEXT_PUBLIC_MAP_KEY;

export function MapBox(){
     const [viewPort, setviewPort] = useState({
          latitude: 9,
          longitude: 7,
          zoom: 7
     }) 
     return(
          <ReactMapGl
          {...viewPort}
          mapboxAccessToken={TOKEN}
          mapStyle= 'mapbox://styles/mapbox/light-v10'
          >

          </ReactMapGl>       
     )
}