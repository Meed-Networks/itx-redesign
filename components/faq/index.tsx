import Accordion from '../accordion';
import styles from './faq.module.scss';
import {useState} from 'react';

import {faq} from './faq';
import { Searchbar } from '../searchBar';
import { NoFaqFound } from './noFaqFound';

export const FAQ = () => {
    const [faqData, setfaqData] = useState(faq);

    const searchFaq = (s:string) =>{
            setfaqData(
            faq.filter(item => {
                // var bd =  Object.values(item.db_values).map((val, ind)=> val);
                return(
                    item.question.toLowerCase().includes(s.toLowerCase())
                )
            }
            )
        )
    }

    const resetSearch = () => {
        setfaqData(faq);
    }

    return (
        <section className={styles.faqSection}>
              <div className={styles.header}>
                    <div className={styles.textSection}>
                        <h2>Frequently Asked Questions</h2>
                        <p>We have some frequently asked questions about ITX Telecoms</p>
                    </div>

                    <div className={styles.searchSection}>
                         <Searchbar 
                         placeholder="Search for questions"
                         resetSearch={resetSearch}
                         onChange={(e) => searchFaq(e.target.value)}/>
                    </div>
              </div>

              <div className={styles.plansSection}>
                {faqData.map(({question, ans}, i) => 
                    <Accordion accordionData={{question, ans}} key={i}/>
               )}
               {faqData.length < 1 && <NoFaqFound/>}
              </div>
          </section>
    )
}