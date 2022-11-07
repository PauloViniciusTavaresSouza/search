import React from 'react';
import styles from './ModalLeft.module.css';

export const ModalLeft = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleChange(event) {
    event.preventDefault();
    if (ativo == false) {
      setAtivo(true);
    } else {
      setAtivo(false);
    }
  }
  console.log(ativo);

  return (
    <div
      className={`${ativo == true ? styles.container : ''} ${
        ativo == false ? styles.ativo : ''
      }`}
    >
      <div>
        <button onClick={handleChange}>abrir</button>
        <h1>title page</h1>
      </div>
    </div>
  );
};
