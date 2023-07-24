'use client';
import styles from './button.module.scss'
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isloading?: boolean;
    describe:'primary'|'white'|'secondary'|'outline';
    disabled?: boolean,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { isloading, describe } = props;

    return(
        <button 
            disabled={isloading}
            id={props.id} 
            {...props} 
            className={`
            ${styles.button} 
            ${props.className} 
            ${(describe =='primary') && styles.primary}
            ${(describe =='secondary') && styles.secondary}
            ${(describe =='white') && styles.white}
            ${(describe =='outline') && styles.outline}
            `}
        >
            { isloading ? "sending..." : props.children }
        </button>
    )
}