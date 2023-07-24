'use client';
import styles from './styles/landingPage.module.scss';
import CountUp from 'react-countup';

const data = [
     {
          number: 23,
          suffix: "+",
          text: "customers that trust us"
     },
     {
          number: 99,
          suffix: "%",
          text: "network uptime"
     },
     {
          number: 8,
          suffix: "+",
          text: "of experience"
     },
]
export default function NumberSection() {
     return(
          <section className={styles.numberContainer}>
               {data.map((v, i) => 
                    <div key={i} className={styles.numberBox}>
                         <CountUp 
                         start={0} 
                         end={v.number} 
                         enableScrollSpy
                         scrollSpyOnce
                         // duration={0} 
                         suffix={v.suffix}
                         useEasing>
                              {({ countUpRef }) => (
                              <h1>
                                   <span ref={countUpRef}/>
                              </h1>
                              )}
                         </CountUp>
                         <p>{v.text}</p>
                    </div>               
               )}
          
          </section>
     )
}