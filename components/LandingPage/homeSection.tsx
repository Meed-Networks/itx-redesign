'use client';

import Image from 'next/image';
import { Button } from '../button';
import styles from './landingPage.module.scss';

export default function HomeSection() {
     return(
          <section className={styles.homeContainer}>
               <div className={styles.textSection}>
                    <h1>Fast and <span className="secondary">Unlimited</span> Internet</h1>

                    <h3>Unlimited speed and freedom - no throttling, no limits.</h3>

                    <Button describe='secondary'>Explore Bundles</Button>
               </div>

               <div className={styles.imageContainer}>
                    <Image 
                    src='/assets/mast.svg'
                    width={'745'}
                    height={'615'}
                    alt="Image of a mast"
                    />
               </div>
          </section>
     )
}