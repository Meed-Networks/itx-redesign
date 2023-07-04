'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import { prices } from './data';
import Plan from './planContainer';
export default function PricingSection() {
     const [type, setType] = useState<'residential' | 'corporate'>("residential")
     return(
          <section className={styles.PricingContainer}>
              <div className={styles.header}>
                    <div className={styles.textSection}>
                         <h2>Simple, transparent pricing</h2>
                         <p>No contracts, No suprise fees</p>
                    </div>

                    <div className={styles.ToggleButton}>
                         Residential
                    </div>
              </div>

              {prices[type].map((plan, i) => <Plan pricing={plan}/>)}
               
          </section>
     )
}
