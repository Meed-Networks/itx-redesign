'use client';
import Image from 'next/image';
import styles from './footer.module.scss'
import {
     IoCallOutline,
     IoLogoWhatsapp
} from 'react-icons/io5';
export default function FooterSection() {
     
     const date = new Date();
     let year:number = date.getFullYear();

     return(
          <div className={styles.footerMain}>

               <div className={styles.mainContainer}>
                    <div className={styles.logoContainer}>
                         <Image src="/assets/logo-white.svg" width="126" height="100" alt="Logo white"/>
                         <p>
                              Commitment to you as our customer <br/> creating a platform  from which you <br/> can operate efficiently
                         </p>
                    </div>

                    <div className={styles.supportContainer}>
                         <h2>SUPPORT</h2>
                         <p>FAQs</p>
                         <p>Contact us</p>
                    </div>

                    <div className={styles.contact}>
                         <h2>CONTACT</h2>
                         <p><IoCallOutline size="14"/> +234 915 809 0000</p>
                         <p><IoCallOutline size="14"/> +234 906 238 6873</p>
                         <p><IoLogoWhatsapp size="14"/> +234 814 295 0096</p>
                         <p><IoLogoWhatsapp size="14"/> info@itxtelecoms.com</p>
                         <p><IoLogoWhatsapp size="14"/> 34 Burundi street, <br/> Wuse Zone 5, Abuja.</p>
                    </div>
               </div>

               <hr className={styles.divider}/>


               <div className={styles.footerText}>
                    Copyright © {year}. Property of ITX Telecoms. All Rights Reserved.
               </div>

               
          </div>
     )
}