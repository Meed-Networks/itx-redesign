'use client';
import Header from '@/components/header';
import styles from '../page.module.css';
import { FAQ } from '@/components/faq';
import FooterSection from '@/components/footer';

export default function Pricing() {
     return (
       <main className={styles.main}>
         <Header page="faq"/>

         <FAQ/>

         <FooterSection/>
     </main>
)
}   