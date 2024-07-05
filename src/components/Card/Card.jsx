import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import style from "./Card.module.css";

const Card = ({video, cor}) => {

    const handleDelete = (id) => {
        console.log(id)
    }

  return (
    <>
      <div className={style.container} style={{border: `6px solid ${cor}`, boxShadow: `inset 0 0 40px ${cor}`}}>
        <div className={style.containerImg}>
          <img src={video.imagem} alt={video.titulo} />
        </div>
        <div className={style.containerBtns}>
          <button onClick={handleDelete.bind(this, video.id)}>
            <MdOutlineDeleteForever size={40} className={style.icon}/>
            <span>Deletar</span>
          </button>
          <button>
          <CiEdit size={40} className={style.icon}/>
            <span>Editar</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
