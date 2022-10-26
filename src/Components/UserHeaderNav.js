import React from 'react';
import style from './UserHeaderNav.module.css';
import { useMedia } from '../Hooks/useMedia';

export const UserHeaderNav = () => {
  const mobile = useMedia('(max-width:1000px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  console.log(mobile);
  return (
    <nav>
      <nav
        className={`${mobile ? style.listaMobile : style.lista} ${
          mobileMenu && style.listaMobileActive
        }`}
      >
        <li>
          <a href="#">Wishlist</a>
        </li>
        <li>
          <a href="#">Filmes</a>
        </li>
      </nav>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
        ></button>
      )}
    </nav>
  );
};
