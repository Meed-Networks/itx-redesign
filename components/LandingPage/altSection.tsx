import Image from 'next/image';
import { Button } from '../button';
import styles from './styles/altsection.module.scss';

export default function AltSection() {
     return(
          <div className={styles.altSectionContainer}>
               <div className={styles.textSection}>
                    <h2>Providing High Speed, Robust and Dependable internet services to your door step</h2>

                    <h3>We are a broadband fiber/wireless internet company that specialize in providing and deploying unlimited internet to your home or office. Customer satisfaction is our top priority.</h3>

                    <Button describe='white'>Explore Bundles</Button>
               </div>

               <div className={styles.imageContainer}>
                    <Image src={'/assets/mast2.svg'}  alt="A mast" width={300} height={500} style={{objectFit: 'contain'}}/>
               </div>
          </div>
     )
}