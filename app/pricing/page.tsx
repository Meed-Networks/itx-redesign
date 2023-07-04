'use client';
import Header from '@/components/header';
import styles from '../page.module.css';
import PricingSection from '@/components/PricingPage/pricingPage';

export default function Pricing() {
     return (
       <main className={styles.main}>
         <Header page="pricing"/>

         <PricingSection/>
     </main>
)
}   