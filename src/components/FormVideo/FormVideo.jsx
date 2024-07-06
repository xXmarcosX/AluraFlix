import React from "react";
import style from "./FormVideo.module.css";

const FormVideo = () => {
  return (
    <>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>

      <div className={style.subtitle}>Criar Card</div>

      <form>
        <div className={style.container}>
          <label>
            <span>Titulo</span>
            <input type="text" name="titulo" placeholder="Insira o titulo" required/>
          </label>
          <label>
            <span>Categoria</span>
            <select name="categoria" required>
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
          />
        </label>

        <label>
          <span>Vídeo</span>
          <input
            type="text"
            name="video"
            placeholder="Digite o link do vídeo"
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
          />
        </label>

        <div className={style.btns}>
          <button>GUARDAR</button>
          <input type="reset" value={'LIMPAR'}/>
        </div>
      </form>
    </>
  );
};

export default FormVideo;
