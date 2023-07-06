'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import BottomSection from './bottomSection';

export default function ContactSection() {
     return(
          <section className={styles.contactContainer}>
              <div className={styles.header}>
                    <h2>Contact Us</h2>
                    <p>Use the information below to let us know how we can serve you best.</p>
              </div>

              <div className={styles.formSection}>
               <div>hello</div>
               <Image src="/assets/contact.svg" className={styles.img} height="600" width="300" alt="Form illustration"/>
              </div>

               <BottomSection/>
          </section>
     )
}
