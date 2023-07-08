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
          <div className="accordion-item">
          <div
               className="accordion-title"
               onClick={() => setIsActive(!isActive)}
          >
               {isActive ? <IoChevronDown size="16px" color="#002239"/> : <IoChevronForward size="16px" color="#002239"/>}
               <h2>{question}</h2>
              
          </div>
          {isActive && <div className="accordion-content">{ans}</div>}
          </div>
          </div>
    </React.Fragment>
  );
};

export default Accordion;