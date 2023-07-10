import React, { useState } from 'react';
import {
     IoChevronForward,
     IoChevronDown
} from 'react-icons/io5';
import styles from './accordion.module.scss';

const Accordion = ({accordionData}:{accordionData :{question: string, ans:string[]}}) => {
const [isActive, setIsActive] = useState(false);
  const { question, ans } = accordionData;

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
               {isActive && <div className={styles.accordionContent}>{ans}</div>}
          </div>
          </div>
    </React.Fragment>
  );
};

export default Accordion;