'use client';
import Header from '@/components/header';
import styles from '../page.module.css';
import FooterSection from '@/components/footer';
import ContactSection from '@/components/contactPage/contactPage';

export default function ContactUs() {
     return (
       <main className={styles.main}>
         <Header page="contact"/>

         <ContactSection/>

         <FooterSection/>
     </main>
)
}   