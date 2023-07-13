import { IoSearchOutline } from "react-icons/io5"
import styles from './searchBar.module.scss';
import { MdSearch } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

type SearchbarProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};


export const Searchbar: React.FC<SearchbarProps> = ({ onBlur, value, onChange, onFocus ,placeholder, className }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const clearInput = () =>{
        if(textInputRef.current) textInputRef.current.value = '';
    }
    return(
        <div className={styles.searchbar}>
            <div>
                <span className={styles.iconAndText}>
                    <MdSearch size={25}/>
                    <input 
                        onBlur={onBlur}
                        onChange={onChange}
                        onFocus={onFocus} 
                        value={value} 
                        className={`${className}`} 
                        type="text" 
                        placeholder={placeholder}
                        ref={textInputRef}
                    />
                </span>
                
                {(textInputRef.current &&  textInputRef.current.value.length > 0) && 
                <span onClick={clearInput} className={styles.cancelBtn}>
                    <IoCloseSharp size={20}/>
                </span>
                }
            </div>
        </div>
    )
}