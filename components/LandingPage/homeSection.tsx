'use client';

import Image from 'next/image';
import { Button } from '../button';
import styles from './styles/landingPage.module.scss';
import { Line } from './line';
import Link from 'next/link';

export default function HomeSection() {
     return(
          <section className={styles.homeContainer}>
               <div className={styles.textSection}>
                    <h1>Fast and <br/><span className="secondary">Unlimited <Line className={styles.scribbleLine} width="225" height="15"/><span></span></span> Internet</h1>

                    <h3>Unlimited speed and freedom - no throttling, no limits.</h3>

                    <Link href="/pricing"><Button describe='secondary'>Explore Bundles</Button></Link>
               </div>

               <div className={styles.imageContainer}>
                    <Image 
                    width= {600}
                    height= {500}
                    className={styles.Homeimage}
                    style={{objectFit: "contain"}}
                    src='/assets/mast.svg'
                    alt="Image of a mast"
                    />
               </div>
          </section>
     )
}