import "mapbox-gl/dist/mapbox-gl.css";
import {useState, useRef, useEffect} from "react";
import ReactMapGl, {Layer, MapRef, Source} from 'react-map-gl';
import map from '../../data/nigeria_lga.json';

const TOKEN = process.env.NEXT_PUBLIC_MAP_KEY;

export function MapBox(){
     const mapRef = useRef<MapRef>(null);
     const [mapPloygon, setMapPolygon] = useState<any[]>([])
     const [viewPort, setviewPort] = useState({
          latitude: 9,
          longitude: 7,
          zoom: 7
     }) 
     useEffect(() => {
          // console.log(map.features[0].properties.NAME_1);
  
          function checkName(data:any) {
              return data.properties.NAME_1 == 'Federal Capital Territory';
          }
          var result = map.features.filter(checkName);
          function geometry(params:any) {
              return params.geometry.coordinates;
          }
          const resArr = [];
          for (const i of result.map(geometry)) {
              resArr.push(i);
          }     
          setMapPolygon(result);
          // console.log(result);
     },[])
     const geojson = {
          type:'geojson',
          data: {
               type: "FeatureCollection",
               features: mapPloygon
           }
     }
     const layerStyle = {
          id: 'maine',
          type: 'fill',
          source: 'maine', // reference the data source
          layout: {},
          paint: {
               'fill-color': '#0080ff', // blue color fill
               'fill-opacity': 0.5
          }
     }
     const layerOutlineStyle = {
          id: 'outline',
          type: 'line',
          source: 'maine',
          layout: {},
          paint: {
          'line-color': '#000',
          'line-width': 3
          }
     }
     
     return(
          <ReactMapGl
          {...viewPort}
          ref={mapRef}
          dragPan
          scrollZoom
          mapboxAccessToken={TOKEN}
          // mapStyle= 'mapbox://styles/mapbox/light-v10'
          mapStyle={'mapbox://styles/hanifadedotun/clkjiaihy000r01peajkq5mtx'}
          >
               <Source id="maine" type='geojson' data={geojson}>
                    {/* <Layer {...layerOutlineStyle}/>
                    <Layer {...layerStyle}/> */}
               </Source>
          
          </ReactMapGl>       
     )
}