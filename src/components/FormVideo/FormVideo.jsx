import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./FormVideo.module.css";

const FormVideo = () => {

  const notifySuccess = () => toast(`Vídeo adicionado!`, {
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

  const [errors, setErrors] = useState({
    titulo: false,
    categoria: false,
    imagem: false,
    video: false,
    descricao: false,
  });

  const validateField = (name, value) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: value === ""
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoVideo({
      ...novoVideo,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleClear = () => {
    setNovoVideo({
      titulo: "",
      categoria: "",
      imagem: "",
      video: "",
      descricao: "",
    });
    setErrors({
      titulo: false,
      categoria: false,
      imagem: false,
      video: false,
      descricao: false,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      titulo: novoVideo.titulo === "",
      categoria: novoVideo.categoria === "",
      imagem: novoVideo.imagem === "",
      video: novoVideo.video === "",
      descricao: novoVideo.descricao === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error);
    if (hasErrors) return;

    fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoVideo)
    }).then(() => {
      notifySuccess();
      handleClear();
    });
  }

  return (
    <>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>

      <div className={style.subtitle}>Criar Card</div>

      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.container}>
          <label>
            <span>Titulo</span>
            <input
              type="text"
              name="titulo"
              placeholder={errors.titulo ? 'O titulo é obrigatório' : 'Digite o titulo do vídeo'}
              value={novoVideo.titulo}
              onChange={handleChange}
              className={errors.titulo ? style.error : ''}
            />
          </label>

          <label>
            <span>Categoria</span>
            <select
              name="categoria"
              value={novoVideo.categoria}
              onChange={handleChange}
              className={errors.categoria ? style.error : ''}
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
              placeholder={errors.imagem ? 'O link da imagem é obrigatório' : 'Digite o link da imagem'}
              value={novoVideo.imagem}
              onChange={handleChange}
              className={errors.imagem ? style.error : ''}
            />
          </label>

          <label>
            <span>Vídeo</span>
            <input
              type="text"
              name="video"
              placeholder={errors.video ? 'O link do vídeo é obrigatório' : 'Digite o link do vídeo'}
              value={novoVideo.video}
              onChange={handleChange}
              className={errors.video ? style.error : ''}
            />
          </label>
        </div>

        <label>
          <span>Descrição</span>
          <textarea
            name="descricao"
            placeholder={errors.descricao ? 'A descrição é obrigatória' : 'Sobre o que é esse vídeo'}
            cols="5"
            rows="10"
            maxLength={300}
            value={novoVideo.descricao}
            onChange={handleChange}
            className={errors.descricao ? style.error : ''}
          />
        </label>

        <div className={style.btns}>
          <button type="submit">GUARDAR</button>
          <input type="reset" value={"LIMPAR"} onClick={handleClear} />
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default FormVideo;