'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import BottomSection from './bottomSection';
import ContactForm from './formSection';
import { Resend } from 'resend';
import { EmailContainer } from '../Email';

export default function ContactSection() {
     // const resend = new Resend(process.env.NODE_PUBLIC_EMAIL_KEY);
     console.log(process.env.NODE_PUBLIC_EMAIL_KEY);//
     const handlemailSend = ({email, name, message}:{email: string, name: string, message: string}) => {
          // resend.sendEmail({
          //      from: email,
          //      to: 'hanifadedotun2k19@gmail.com',
          //      subject: 'You have a new message',
          //      react: <EmailContainer email={email} name={name} message={message} />,
          // });
     }
     return(
          <section className={styles.contactContainer}>
              <div className={styles.header}>
                    <h2>Contact Us</h2>
                    <p>Use the information below to let us know how we can serve you best.</p>
              </div>

              <div className={styles.formSection}>
               <ContactForm/>
               <Image src="/assets/contact.svg"  
               height="400" 
               width="500" 
               alt="Form illustration"
               className={styles.contactImage}/>
              </div>

               <BottomSection/>
          </section>
     )
}
