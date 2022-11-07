import React, { useEffect } from 'react';
import { Modal } from '../../Components/Modal/Modal';
import { AnimesListados } from '../../Components/AnimesPesquisados/AnimesListados';

const api = 'https://kitsu.io/api/edge/';

export const Films = ({ text }) => {
  const [isModalVisible, setisModalVisible] = React.useState(false);
  const [selectedAnime, setSelectedAnime] = React.useState(null);
  const [info, setInfo] = React.useState(null);

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=8&page[offset]=5`)
        .then((response) => response.json())
        .then((response) => {
          console.log('response', response?.data);
          setInfo(response.data);
        })
        .catch((error) => console.log('Deu pau', error));
    }
  }, [text]);
  return (
    <div>
      <AnimesListados
        info={info}
        setisModalVisible={setisModalVisible}
        setSelectedAnime={setSelectedAnime}
      />
      {isModalVisible ? (
        <Modal
          selectedAnime={selectedAnime}
          setisModalVisible={setisModalVisible}
        />
      ) : null}
    </div>
  );
};
