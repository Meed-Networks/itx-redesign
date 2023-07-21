import {useState} from 'react';
import styles from './modal.module.scss';
import {Modal} from './modal';
import Image from 'next/image';

type ModalProps = {
     isOpen: boolean, //State to open the modal
     closeModal: Function | any,
     message?: string
}

export const ErrorModal: React.FC<ModalProps> = ({isOpen, closeModal, message}) => {    
     return(
          <>
               <Modal isOpen={isOpen} closeModal={closeModal}>
               <Image src="/assets/contact/warn.svg" height={130} width={255} className={styles.successIcon} alt=""/>
               <div className={`${styles.successText} ${styles.errorText}`}>
                    {(message) ? message: "Could not send email, try again"}
               </div>
               </Modal>
          </>
     )
}