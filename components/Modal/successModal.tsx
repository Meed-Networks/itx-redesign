import {useState} from 'react';
import styles from './modal.module.scss';
import {Modal} from './modal';
import Image from 'next/image';

type ModalProps = {
     isOpen: boolean, //State to open the modal
     closeModal: Function | any,
     message?: string
}

export const SuccessModal: React.FC<ModalProps> = ({isOpen, closeModal, message}) => {    
     return(
          <>
               <Modal isOpen={isOpen} closeModal={closeModal}>
               <Image src="/assets/phone.svg" height={271} width={135} className={styles.successIcon} alt=""/>
               <div className={styles.successText}>
                    {(message) ? message: "Email sent successfully!"}
               </div>
               </Modal>
          </>
     )
}