import './App.css';
import { SearchInput } from './SearchInput/SearchInput';
import React, { useEffect } from 'react';
import { Modal } from './Modal/Modal';

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
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {info && (
        <ul className="anime-list">
          {info.map((anime) => (
            <li
              key={anime.id}
              onClick={() => {
                setisModalVisible(true);
                setSelectedAnime(anime.id);
              }}
            >
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
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
