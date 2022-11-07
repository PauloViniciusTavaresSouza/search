import React from 'react';
import style from './AnimesListados.module.css';
import { useMedia } from '../../Hooks/useMedia';

export const AnimesListados = ({
  info,
  setisModalVisible,
  setSelectedAnime,
}) => {
  const mobile = useMedia('(max-width:620px)');
  const mobileMicro = useMedia('(max-width:375px)');
  console.log(mobile);

  return (
    <div className={style.containerPrincipal}>
      <div className={style.container}>
        {info && (
          <ul
            className={`${
              mobileMicro
                ? style.animeListMobileMicro
                : mobile
                ? style.animeListMobile
                : style.animeList
            }`}
          >
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
                <h1>{anime.attributes.canonicalTitle}</h1>
                <button>Assitir</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
