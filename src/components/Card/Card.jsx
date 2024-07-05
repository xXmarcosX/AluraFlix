import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import style from "./Card.module.css";

const Card = ({ video, cor }) => {

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/videos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        alert('Vídeo deletado!')
        location.reload()
      })
      .catch(() => {
        alert('Erro ao deletar o vídeo')
      });
  };

  return (
    <>
      <div className={style.container} style={{ border: `6px solid ${cor}`, boxShadow: `inset 0 0 40px ${cor}` }}>
        <div className={style.containerImg}>
          <img src={video.imagem} alt={video.titulo} />
        </div>
        <div className={style.containerBtns}>
          <button onClick={() => handleDelete(video.id)}>
            <MdOutlineDeleteForever size={40} className={style.icon} />
            <span>Deletar</span>
          </button>
          <button>
            <CiEdit size={40} className={style.icon} />
            <span>Editar</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
