import Image from "next/image"
import styles from './faq.module.scss';

export const NoFaqFound = () => {
     return(
          <div className={styles.emptyContainer}>
               <Image className={styles.image} src="/assets/empty.svg" alt='empty' height="250" width="300"/>
               <h2>No questions found</h2>               
          </div>
     )
}
