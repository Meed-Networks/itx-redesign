import {useState} from 'react';
import styles from './modal.module.scss';
import {Modal} from './modal';
import Image from 'next/image';

interface ISuccessModalProps {
     isOpen: boolean, //State to open the modal
     closeModal: Function | any,
     message?: string
}

export const SuccessModal = ({isOpen, closeModal, message}:ISuccessModalProps) => {    
     return(
          <>
               <Modal isOpen={isOpen} closeModal={closeModal}>
               <Image src="/assets/contact/mail_sent.svg" height={130} width={255} className={styles.successIcon} alt=""/>
               <div className={styles.successText}>
                    {(message) ? message: "Email sent successfully!"}
               </div>
               </Modal>
          </>
     )
}