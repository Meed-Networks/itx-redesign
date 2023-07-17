import styles from './inputStyle.module.scss';
import {IoCheckmarkCircleOutline} from 'react-icons/io5'
import { useState } from 'react';

type InputProps = {
    name?: string,
    placeholder?: string,
    labelName: string,
    type?: 'text';
    multiple?: number;
    inputClassName?: string,
    onChange?: any,
    className?: string,
    value?: string|number|string[],
    isDisabled?:boolean
    reg?:any,
    isError?:boolean
    error?: string
    defaultValue?: string
}


export const InputGroup:React.FC<InputProps> = (props) => {
    const { isDisabled, className, defaultValue, value, multiple, name, onChange, inputClassName, placeholder, labelName, reg, error, isError} = props;
    return(
        <div className={`${styles.inputGroup} ${className}`}>
            <label 
                htmlFor={name} 
                className={styles.inputLabel}
            >
                {labelName}
            </label>
            {(multiple) ? 
               <textarea 
                    rows={5}
                    defaultValue={defaultValue}
                    disabled={isDisabled} 
                    value={value} 
                    {...reg} 
                    onChange={onChange} 
                    className={inputClassName} 
                    id={name} 
                    title={name} 
                    placeholder={placeholder} 
                    name={name} >
               </textarea>
               : 
               <input 
                    defaultValue={defaultValue}
                    disabled={isDisabled} 
                    value={value} 
                    {...reg} 
                    onChange={onChange} 
                    className={inputClassName} 
                    id={name} 
                    title={name} 
                    placeholder={placeholder} 
                    name={name} 

            />}
            {error && <p className={(isError === false) ? styles.goodText : styles.errorText}>{(isError === false) && <IoCheckmarkCircleOutline/>} {error}</p>}
        </div>
    )
}
