import styles from './modal.module.scss';
import {IoCloseOutline} from 'react-icons/io5';
import { useEffect } from 'react';
interface IModalProps {
    isOpen: boolean, //State to open the modal
    children?: JSX.Element | JSX.Element[],
    closeModal: Function | any,
    fixed?: boolean,
    className?: string,
    isAlert?: boolean,
}


export const Modal = ({ isAlert, isOpen, children, closeModal, className, fixed=false }:IModalProps) => {    
    useEffect(() => {
        if(isOpen)
            document.body.setAttribute('class', 'backdrop-no-scroll');
        else
            document.body.removeAttribute('class')

        return () => {
            document.body.removeAttribute('class')
        }
    }, [isOpen])
    
    if(!isOpen) return null
    return(
        <div className={styles.modalBackdrop} onClick={(fixed) ? (e) => {e.stopPropagation()}:closeModal}>
            <div className={`${styles.modalContainer} ${className}`} onClick={(e) => e.stopPropagation()}>
            {
                !isAlert && 
                <span className={styles.cancelIcon} onClick={closeModal}>
                    <IoCloseOutline size={30}/>
                </span>
            }
                { children }
            </div>
        </div>
    )
}

Modal.defaultProps = {
    isAlert: false,
}