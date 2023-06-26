import Image from 'next/image';
import styles from './styles/servicesSection.module.scss';
import SectionHeader from './sectionHeader';

const services = [
     {
          image: "/assets/services/network.svg",
          text: "Unlimited Download"
     },
     {
          image: "/assets/services/broadband.svg",
          text: "High speed Broadband"
     },
     {
          image: "/assets/services/access.svg",
          text: "Instant access"
     },
     {
          image: "/assets/services/money.svg",
          text: "Affordable data plan"
     },
]

export default function ServicesSection() {
     return(
          <section className={styles.servicesContainer}>
               <SectionHeader title="Our Services"/>
               <div className={styles.servicesItem}>
                    {services.map((v,i) => 
                         <div key={i} className={styles.servicesBox}>
                              <div><Image src={v.image} width={64} height={64} style={{objectFit: 'contain'}} alt="Services Icon"/></div>
                              <h3>{v.text}</h3>
                         </div> 
                    )}
               </div>
          </section>
     )
}


