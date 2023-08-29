import React, { useState } from 'react';
import {
     IoChevronForward,
     IoChevronDown
} from 'react-icons/io5';
import styles from './accordion.module.scss';
import { Faq2 } from '../faq/faqs';

const Accordion = ({accordionData}:{accordionData :{question: string, ans:string[], table?:boolean,}}) => {
const [isActive, setIsActive] = useState(false);
  const { question, ans, table } = accordionData;

  return (
    <React.Fragment>
      <div className={styles.accordion}>
          <div className={styles.accordionItem}>
               <div
                    className={styles.accordionTitle}
                    onClick={() => setIsActive(!isActive)}
               >
                    {isActive ? <IoChevronDown size="30px" color="#002239"/> : <IoChevronForward size="30px" color="#002239"/>}
                    <h2>{question}</h2>
               
               </div>
               {isActive && <div className={styles.accordionContent}>
               {ans.map((a,i) => <p key={i}>{a}</p>)}
               {(table) ? <Faq2/>: ''}
               </div>}
          </div>
          </div>
    </React.Fragment>
  );
};

export default Accordion;