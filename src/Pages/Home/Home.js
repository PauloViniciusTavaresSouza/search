import React from 'react';
import { Form } from '../../Pages/Form/Form';
import { ModalLeft } from '../../Components/ModalLateral/ModalLeft';
import { Films } from '../../Pages/Films/Films';
import { Header } from '../../Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
  const [text, setText] = React.useState('');

  return (
    <div className={styles.containerPrincipal}>
      <div>
        <ModalLeft />
      </div>
      <div className={styles.container}>
        <Header text={text} setText={setText} />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/filme" element={<Films text={text} />} />
        </Routes>
      </div>
    </div>
  );
};
