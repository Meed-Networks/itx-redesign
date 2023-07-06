import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

const data = [
     {
          image: '/assets/contact/mail.svg',
          title: 'Chat with our sales team',
          text: 'Speak to our friendly team',
          bold: 'info@itxtelecoms.com',
     },
     {
          image: '/assets/contact/map.svg',
          title: 'Visit us',
          text: 'Visit our office HQ.',
          bold: '34 Burundi Street, Wuse zone 5.',
     },
     {
          image: '/assets/contact/phone.svg',
          title: 'Call us',
          text: 'Mon-Fri from 9am to 5pm.',
          bold: '34 Burundi Street, Wuse zone 5.',
     }
]

export default function BottomSection() {
     return(
          <section className={styles.bottomContainer}>
               {data.map(({image, title, text, bold},i) => 
               <div key={i} className={styles.text}>
                    <Image src={image} height="60" width="60" alt=""/>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <b>{bold}</b>
               </div>
               )}
          </section>
     )
}