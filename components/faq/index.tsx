import styles from './faq.module.scss';

export const FAQ = () => {

    return (
        <section className={styles.faqSection}>
              <div className={styles.header}>
                    <div className={styles.textSection}>
                        <h2>Frequently Asked Questions</h2>
                        <p>We have some frequently asked questions about ITX Telecoms</p>
                    </div>

                    <div className={styles.searchBar}>
                         
                    </div>
              </div>

              <div className={styles.plansSection}>
               
              </div>
          </section>
    )
}