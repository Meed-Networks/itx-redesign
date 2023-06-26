import styles from './styles/sectionHeader.module.scss';

import {
     IoRemoveOutline
} from 'react-icons/io5';

export default function SectionHeader({title}:{title:string}) {
     return(
          <div className={styles.sectionHeader}>
               <IoRemoveOutline size={24}/> <span>{title}</span>
          </div>
     )
}