'use client';

import Image from 'next/image';
import { Button } from '../button';
import styles from './styles/landingPage.module.scss';
import { Line } from './line';

export default function HomeSection() {
     return(
          <section className={styles.homeContainer}>
               <div className={styles.textSection}>
                    <h1>Fast and <br/><span className="secondary">Unlimited <Line className={styles.scribbleLine} width="225" height="15"/><span></span></span> Internet</h1>

                    <h3>Unlimited speed and freedom - no throttling, no limits.</h3>

                    <Button describe='secondary'>Explore Bundles</Button>
               </div>

               <div className={styles.imageContainer}>
                    <Image 
                    width= {606}
                    height= {500}
                    style={{objectFit: "contain"}}
                    src='/assets/mast.svg'
                    alt="Image of a mast"
                    />
               </div>
          </section>
     )
}