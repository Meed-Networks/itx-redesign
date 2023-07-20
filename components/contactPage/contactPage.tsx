'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import BottomSection from './bottomSection';
import ContactForm from './formSection';
import { Resend } from 'resend';
import { useMutation } from 'react-query';
import { sendEmail } from '@/services/email';
import { IEmail } from '@/app/api/email';
// import { EmailContainer } from '../emails';

export default function ContactSection() {
     const sendEmailMutation = useMutation(sendEmail, {
          onSuccess: (d) =>{
               console.log(d)
          },
          onError:(e)=>{
               console.log(e)
          }
     });
     
     const handlemailSend = async (data:IEmail) => {
          sendEmailMutation.mutate(data);
     }
     return(
          <section className={styles.contactContainer}>
              <div className={styles.header}>
                    <h2>Contact Us</h2>
                    <p>Use the information below to let us know how we can serve you best.</p>
              </div>

              <div className={styles.formSection}>
               <ContactForm sendMail={handlemailSend}/>
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
