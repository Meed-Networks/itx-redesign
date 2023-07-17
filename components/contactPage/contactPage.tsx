'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import BottomSection from './bottomSection';
import ContactForm from './formSection';

export default function ContactSection() {
     return(
          <section className={styles.contactContainer}>
              <div className={styles.header}>
                    <h2>Contact Us</h2>
                    <p>Use the information below to let us know how we can serve you best.</p>
              </div>

              <div className={styles.formSection}>
               <ContactForm/>
               <Image src="/assets/contact.svg"  
               height="600" 
               width="300" 
               alt="Form illustration"
               className={styles.contactImage}/>
              </div>

               <BottomSection/>
          </section>
     )
}
