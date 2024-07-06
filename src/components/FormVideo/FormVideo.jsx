import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./FormVideo.module.css";

const FormVideo = () => {

    const notifySuccess = () => toast(`Vídeo adicionado`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#030910',
          color: '#fff',
          border: `1px solid #030910`,
          boxShadow: `0 0 10px #225DA5`
        }
      });

  const [novoVideo, setNovoVideo] = useState({
    titulo: "",
    categoria: "",
    imagem: "",
    video: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoVideo({
      ...novoVideo,
      [name]: value,
    });
  };

 const handleClear = () => {
    setNovoVideo({
        titulo: "",
        categoria: "",
        imagem: "",
        video: "",
        descricao: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoVideo)
    }).then(() => {
        notifySuccess()
        handleClear()
    })
  }

  return (
    <>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>

      <div className={style.subtitle}>Criar Card</div>

      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <label>
            <span>Titulo</span>
            <input
              type="text"
              name="titulo"
              placeholder="Insira o titulo"
              required
              value={novoVideo.titulo}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Categoria</span>
            <select
              name="categoria"
              required
              value={novoVideo.categoria}
              onChange={handleChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="FRONT END">FRONT END</option>
              <option value="BACK END">BACK END</option>
              <option value="MOBILE">MOBILE</option>
            </select>
          </label>
        </div>

        <div className={style.container}>
          <label>
            <span>Imagem</span>
            <input
              type="text"
              name="imagem"
              placeholder="Digite o link da imagem"
              value={novoVideo.imagem}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Vídeo</span>
            <input
              type="text"
              name="video"
              placeholder="Digite o link do vídeo"
              value={novoVideo.video}
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <span>Descrição</span>
          <textarea
            name="descricao"
            id=""
            placeholder="Sobre o que é esse vídeo"
            cols="5"
            rows="10"
            maxLength={300}
            value={novoVideo.descricao}
            onChange={handleChange}
          />
        </label>

        <div className={style.btns}>
          <button>GUARDAR</button>
          <input type="reset" value={"LIMPAR"} onClick={() => handleClear()}/>
        </div>
      </form>
      <ToastContainer/>
    </>
  );
};

export default FormVideo;
