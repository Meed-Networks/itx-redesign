import styles from './styles/landingPage.module.scss';

const data = [
     {
          number: "200+",
          text: "customers that trust us"
     },
     {
          number: "99%",
          text: "network uptime"
     },
     {
          number: "10+",
          text: "of experience"
     },
]
export default function NumberSection() {
     return(
          <section className={styles.numberContainer}>
               {data.map((v, i) => 
                    <div key={i} className={styles.numberBox}>
                         <h1>{v.number}</h1>
                         <p>{v.text}</p>
                    </div>               
               )}
          
          </section>
     )
}