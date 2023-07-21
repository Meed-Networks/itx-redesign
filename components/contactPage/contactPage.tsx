'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import BottomSection from './bottomSection';
import ContactForm from './formSection';
import { Resend } from 'resend';
import { useMutation } from 'react-query';
import { sendEmail } from '@/services/email';
import { IEmail } from '@/app/api/email/route';
import { SuccessModal } from '../Modal';
import { ErrorModal } from '../Modal/errorModal';
// import { EmailContainer } from '../emails';

export default function ContactSection() {
     const [emailDelivery, setEmailDelivery] = useState<'success' | 'error' | 'null'>('null')
     const sendEmailMutation = useMutation(sendEmail, {
          onSuccess: (d) =>{
               setEmailDelivery('success');
          },
          onError:(e)=>{
               console.log(e)
               setEmailDelivery('error');
          }
     });
     
     const handlemailSend = async (data:IEmail) => {
          sendEmailMutation.mutate(data);
     }
     return(
          <>
          {emailDelivery == 'success' && <SuccessModal isOpen={true} closeModal={() => setEmailDelivery('null')}/>}
          {emailDelivery == 'error' && <ErrorModal isOpen={true} closeModal={() => setEmailDelivery('null')}/>}
          <section className={styles.contactContainer}>
              <div className={styles.header}>
                    <h2>Contact Us</h2>
                    <p>Use the information below to let us know how we can serve you best.</p>
              </div>

              <div className={styles.formSection}>
               <ContactForm sendMail={handlemailSend} loading={sendEmailMutation.isLoading}/>
               <Image src="/assets/contact.svg"  
               height="400" 
               width="500" 
               alt="Form illustration"
               className={styles.contactImage}/>
              </div>

               <BottomSection/>
          </section>
     </>
     )
}
