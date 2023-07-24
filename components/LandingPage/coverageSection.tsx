'use client';

import styles from './styles/landingPage.module.scss';
import "leaflet/dist/leaflet.css";
import {TileLayer, Popup, Marker} from "react-leaflet";
import { LatLngExpression } from 'leaflet';
import SectionHeader from './sectionHeader';
import countries from './../../data/countries.json';
import { MapBarrel } from '../Map/barrel';
import { MapCoverageContainer } from '../Map/mapContainer';
import ClientMap from '../Map';

export default function CoverageSection() {
     const position = [9.0820, 8.6753]; //[51.505, -0.09]
     return(
          <section className={styles.coverageSection}>
               <SectionHeader title="Our coverage"/>
               <section className={styles.twoSection}>
                    <div className={styles.textSection}>
                         <p>Our extensive coverage extends across a significant portion of the Federal Capital Territory (FCT), </p>

                         <p>Encompassing key areas such as: 
                              <br/>Wuse, 
                              <br/>Garki, 
                              <br/>Maitama,
                              <br/>Apo. 
                         </p>
                         <p>
                              Rest assured, our network reaches a majority of the FCT, .
                         </p>
                    </div>

                    <div className={styles.mapBox}>
                         {/* <MapCoverageContainer/> */}
                         {/* <MapContainer 
                         center={position as LatLngExpression}
                         zoom={13}
                         scrollWheelZoom={false}>
                              <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                         </MapContainer> */}
                         {/* <MapBarrel/> */}
                         
                    </div>
               </section>
          </section>
     )
}