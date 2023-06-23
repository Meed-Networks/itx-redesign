import styles from './landingPage.module.scss';

export default function CoverageSection() {
     return(
          <section className={styles.coverageSection}>
               {/* Title Component */}
               <section className={styles.twoSection}>
                    <div className={styles.textSection}>
                         <p>Our extensive coverage extends across a significant portion of the Federal Capital Territory (FCT), </p>

                         <p>Encompassing key areas such as: 
                              <br/>Wuse, 
                              <br/>Garki, 
                              <br/>Maitama,
                              <br/>Apo. 
                         </p>
                         <p>
                              Rest assured, our network reaches a majority of the FCT, .
                         </p>
                    </div>

                    <div>

                    </div>
               </section>
          </section>
     )
}