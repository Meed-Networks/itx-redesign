'use client';
import Image from 'next/image';
import styles from './footer.module.scss'
import {
     IoCallOutline,
     IoLocationOutline,
     IoLogoWhatsapp,
     IoMailOpenOutline,
     IoMailOutline
} from 'react-icons/io5';
import Link from 'next/link';
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
                         <p><Link href="/faq">FAQs</Link></p>
                         <p><Link href="/contact"> Contact us </Link></p>
                    </div>

                    <div className={styles.contact}>
                         <h2>CONTACT</h2>
                         <p><IoCallOutline size="14"/> <a href="tel:+234 915 809 0000">+234 915 809 0000</a> </p>
                         <p><IoCallOutline size="14"/> <a href="tel:+234 906 238 6873">+234 906 238 6873</a></p>
                         <p><IoLogoWhatsapp size="14"/> <a href="https://wa.me/+2348142950096">+234 814 295 0096</a></p>
                         <p><IoMailOutline size="14"/> <a href="mailto:info@itxtelecoms.com">info@itxtelecoms.com</a></p>
                         <p><IoLocationOutline size="14"/> <a href="https://goo.gl/maps/LXhfAsjX9oCarDCr8"> 34 Burundi street, <br/> Wuse Zone 5, Abuja.</a></p>
                    </div>
               </div>

               <hr className={styles.divider}/>


               <div className={styles.footerText}>
                    Copyright © {year}. Property of ITX Telecoms. All Rights Reserved.
               </div>

               <img src="/assets/ITX.svg" className={styles.ITXLogo} alt="ITX text Logo"/>
          </div>
     )
}