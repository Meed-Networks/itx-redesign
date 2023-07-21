'use client';
import styles from './button.module.scss'
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    describe:'primary'|'white'|'secondary'|'outline';
    disabled?: boolean,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { isLoading, describe } = props;

    return(
        <button 
            disabled={isLoading}
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
            { isLoading ? "sending..." : props.children }
        </button>
    )
}