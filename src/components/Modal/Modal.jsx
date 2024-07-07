import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import style from "./Modal.module.css";


const Modal = ({ isOpen, onClose, children, video }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button onClick={onClose} className={style.closeButton}><IoMdCloseCircleOutline 
        style={{color: 'white'}} 
        size={25}/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
