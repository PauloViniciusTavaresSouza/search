import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div onClick={handleOutsideClick} className="containerModal-master">
          <div className="container-modal">
            <div className="posterImage">
              <img src={currentAnime.attributes.posterImage.original} />
            </div>
            <div className="conteudo">
              <h1>{currentAnime.attributes.canonicalTitle}</h1>
              <p>{currentAnime.attributes.description}</p>
              <button>Assistir</button>
            </div>
            <div className="sairModal">
              <button onClick={handleOutsideClick}>X</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Ops, o anime nao foi carregado</h1>
      )}
    </>
  );
};
