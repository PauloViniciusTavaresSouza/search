import './App.css';
import { SearchInput } from './SearchInput/SearchInput';
import React, { useEffect } from 'react';

const api = 'https://kitsu.io/api/edge/';

function App() {
  const [text, setText] = React.useState('');
  const [info, setInfo] = React.useState({});

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=8`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {info.data && (
        <ul className="anime-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
