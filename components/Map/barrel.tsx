import {useEffect, useState} from 'react';

import dynamic from "next/dynamic";

// export const MapBarrel = () => {
//      const [Client, setClient] = useState<FunctionComponent>();
 
//      useEffect(() => {
//          (async () => {
//              if (typeof global.window !== "undefined") {
//                  const newClient = (await import('./index')).default
//                  setClient(() => newClient);
//              }
//          })();
//      }, [])
 
//      if (typeof global.window === "undefined" || !Client) {
//          return null;
//      }
     
//      return Client ? <Client {...props} /> : null;
//  }

export const MapBarrel = dynamic(() => import("@/components/Map"), {
     loading: () => <p>loading Map...</p>,
     ssr: false
 })