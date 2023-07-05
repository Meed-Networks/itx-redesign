'use Client'

import { useState } from 'react';
import styles from './style.module.scss';
import { prices } from './data';
import Plan from './planContainer';
import { Toggle } from '../Toggle';
export default function PricingSection() {
     const [type, setType] = useState<'residential' | 'corporate'>("residential")
     return(
          <section className={styles.PricingContainer}>
              <div className={styles.header}>
                    <div className={styles.textSection}>
                         <h2>Simple, transparent pricing</h2>
                         <p>No contracts, No surprise fees</p>
                    </div>

                    <div className={styles.ToggleButton}>
                         <Toggle label="Residential" label2='Corporate' toggled={false} onClick={(state:boolean) => {
                              if(state){setType('corporate')}
                              else{setType('residential')}
                              }}/>
                    </div>
              </div>

              <div className={styles.plansSection}>
               {prices[type].map((plan, i) => <Plan type={type} pricing={plan}/>)}
              </div>
          </section>
     )
}
