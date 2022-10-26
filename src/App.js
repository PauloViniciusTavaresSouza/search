import './App.css';
import React, { useEffect } from 'react';
import { Modal } from './Modal/Modal';
import { Header } from './Components/Header';
import { AnimesListados } from './Components/AnimesListados';

const api = 'https://kitsu.io/api/edge/';

function App() {
  const [text, setText] = React.useState('');
  const [info, setInfo] = React.useState(null);
  const [isModalVisible, setisModalVisible] = React.useState(false);
  const [selectedAnime, setSelectedAnime] = React.useState(null);

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

  console.log(info);

  return (
    <div className="App">
      <Header text={text} setText={setText} />
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
}

export default App;
