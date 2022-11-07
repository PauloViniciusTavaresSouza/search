import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Modal.module.css';

const api = 'https://kitsu.io/api/edge/anime';

export const Modal = ({ selectedAnime, setisModalVisible }) => {
  const [currentAnime, setCurrentAnime] = useState(null);

  useEffect(() => {
    axios.get(`${api}/${selectedAnime}`).then((response) => {
      console.log('Response do MODAL', response);
      setCurrentAnime(response.data.data);
    });
  }, [selectedAnime]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setisModalVisible(false);
    console.log('TARGET: ', event.target);
    console.log('Current: ', event.currentTarget);
  }

  return (
    <>
      {currentAnime ? (
        <div
          onClick={handleOutsideClick}
          className={style.containerModalMaster}
        >
          <div className={style.containerModal}>
            <div className={style.posterImage}>
              <img
                src={currentAnime.attributes.posterImage.original}
                alt={currentAnime.attributes.canonicalTitle}
              />
            </div>
            <div className={style.conteudo}>
              <h1>{currentAnime.attributes.canonicalTitle}</h1>
              <p>{currentAnime.attributes.description}</p>
              <button>Assistir</button>
            </div>
            <div className={style.sairModal}>
              <button onClick={handleOutsideClick}></button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Ops, o anime nao foi carregado</h1>
      )}
    </>
  );
};
