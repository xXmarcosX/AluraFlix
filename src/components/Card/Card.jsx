import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import Select from "react-select";
import Modal from "../Modal/Modal.jsx";
import style from "./Card.module.css";

const Card = ({ video, cor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    titulo: "",
    categoria: "",
    imagem: "",
    video: "",
    descricao: "",
  });

  const options = [
    { value: "FRONT END", label: "FRONT END" },
    { value: "BACK END", label: "BACK END" },
    { value: "MOBILE", label: "MOBILE" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '3px solid #2271D1',
      borderRadius: '8px',
      backgroundColor: '#03122F',
      height: '7vh',
      width: '100%',
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'white',
      backgroundColor: '#03122F', 
      width: '100%'
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
  };

  useEffect(() => {
    fetch(`http://localhost:3000/videos/${video.id}`)
      .then((response) => response.json())
      .then((data) => setSelectedVideo(data))
      .catch(() => console.log("erro na API"));
  }, [video.id]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/videos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Vídeo deletado!");
        location.reload();
      })
      .catch(() => {
        alert("Erro ao deletar o vídeo");
      });
  };

  const handleEditClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedVideo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedVideo((prevState) => ({
      ...prevState,
      categoria: selectedOption.value, 
    }));
  };

  const handleClear = () => {
    setSelectedVideo({
      titulo: "",
      categoria: "",
      imagem: "",
      video: "",
      descricao: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/videos/${video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedVideo)
    }).then(() => {
      alert('Alteração realizada com sucesso')
      location.reload()
    })
    .catch(() => {
      alert('Não foi possível alterar o vídeo')
    })
  }

  return (
    <>
      <div
        className={style.container}
        style={{
          border: `6px solid ${cor}`,
          boxShadow: `inset 0 0 40px ${cor}`,
        }}
      >
        <div className={style.containerImg}>
          <img src={video.imagem} alt={video.titulo} />
        </div>
        <div className={style.containerBtns}>
          <button onClick={() => handleDelete(video.id)}>
            <MdOutlineDeleteForever size={40} className={style.icon} />
            <span>Deletar</span>
          </button>
          <button onClick={handleEditClick}>
            <CiEdit size={40} className={style.icon} />
            <span>Editar </span>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleEditClick}>
        <h2>EDITAR CARD:</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Titulo
            <input
              type="text"
              name="titulo"
              value={selectedVideo.titulo}
              onChange={handleInputChange}
            />
          </label>

          <label>
            <span>Categoria</span>
            <Select
              value={{ value: selectedVideo.categoria, label: selectedVideo.categoria }}
              onChange={handleSelectChange}
              styles={customStyles}
              options={options}
            />
          </label>

          <label>
            Imagem
            <input
              type="text"
              name="imagem"
              value={selectedVideo.imagem}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Vídeo
            <input
              type="text"
              name="video"
              value={selectedVideo.video}
              onChange={handleInputChange}
            />
          </label>

          <label>
            <span>Descrição</span>
            <textarea
              name="descricao"
              maxLength={300}
              value={selectedVideo.descricao}
              onChange={handleInputChange}
            />
          </label>

          <div>
            <button>GUARDAR</button>
            <input type="reset" value="LIMPAR" onClick={handleClear}/>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Card;
