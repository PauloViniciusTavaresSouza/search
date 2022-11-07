import React from 'react';
import { SearchInput } from '../SearchInput/SearchInput';
import logo from '../../img/logo.png';
import style from './Header.module.css';
import { UserHeaderNav } from './UserHeaderNav';
import { useMedia } from '../../Hooks/useMedia';
import { Link } from 'react-router-dom';

export const Header = ({ text, setText }) => {
  const mobile = useMedia('(max-width:600px)');
  const mobileMicro = useMedia('(max-width:375px)');

  return (
    <div
      className={`${
        mobileMicro
          ? style.containerPrincipalMicro
          : mobile
          ? style.containerPrincipalMobile
          : style.containerPrincipal
      }`}
    >
      <div
        className={`${
          mobileMicro
            ? style.containerMobileMicro
            : mobile
            ? style.containerMobile
            : style.container
        }`}
      >
        <div
          className={`${
            mobileMicro
              ? style.logoMobileMicro
              : mobile
              ? style.logoMobile
              : style.logo
          }`}
        >
          <Link to="/">
            {' '}
            <img src={logo} alt="logo do site" />
          </Link>
        </div>
        <div>
          <SearchInput value={text} onChange={(search) => setText(search)} />
        </div>
        <div>
          <UserHeaderNav />
        </div>
      </div>
    </div>
  );
};
