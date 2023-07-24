// import { world_map } from '../ass';
import {world_map} from '../../public/assets/map/world_map.ts';
import {nigeria_map} from '../../public/assets/map/nigeria.ts'; 
import { uncountries } from '../../public/assets/map/data.ts'
import {
    MapsComponent,
    LayersDirective,
    LayerDirective,
    Inject,
    Zoom,
  } from '@syncfusion/ej2-react-maps';
export function MapCoverageContainer() {
     return (
          <MapsComponent id="maps" 
          zoomSettings={{
            enable: true,
            toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
          }}>
             <Inject services={[Zoom]} />
          <LayersDirective>
              <LayerDirective shapeData={nigeria_map} shapeDataPath='Country' shapePropertyPath='name' dataSource={uncountries} shapeSettings={{
                    fill: '#00AEEF',
                }}>
              </LayerDirective>
          </LayersDirective>
      </MapsComponent>
    // <MapsComponent
    //   zoomSettings={{
    //     enable: true,
    //     toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
    //   }}
    // >
    //   <Inject services={[Zoom]} />
    //   <LayersDirective>
    //     <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/9.072264/7.491302.png" />
    //   </LayersDirective>
    // </MapsComponent>
     );
}