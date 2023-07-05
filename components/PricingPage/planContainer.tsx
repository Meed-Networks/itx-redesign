import styles from './style.module.scss';
import { IPrice, properties } from './data';
import { 
     IoCheckmark
} from 'react-icons/io5'
import { Button } from '../button';

export default function Plan({pricing, type}:{pricing: IPrice, type: 'residential' | 'corporate'}) {
     return(
          <div className={styles.priceContainer}>
               <h2>{pricing.name}</h2>  
               <h1>{pricing.speed} <span className="smallText">/sec</span></h1>  

               <ul className={styles.properties}>
                    {properties.map((v,i) => 
                    <li>
                    <IoCheckmark size="14" color="#00AEEF"/> {v}
                    </li>)}
               </ul>  

               {type == 'residential' && <h2 className={styles.maxSpeed}>up to {pricing.maxSpeed}<span className="smallText">/sec</span></h2>} 

               <Button describe='outline'>N {pricing.price}</Button>     
          </div>
     )
}