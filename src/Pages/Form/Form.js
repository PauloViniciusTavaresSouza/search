import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
  const [areas, setAreas] = React.useState([]);
  const [curso, setCurso] = React.useState([]);
  const [prof, setProf] = React.useState([]);

  let area = ['SELECIONE', 'SAUDE', 'TECNOLOGIA', 'DIREITO'];

  // let cursoo = {
  //   saude: ['SELECIONE', MEDICINA: [ 'SELECIONE',
  //   'DERMATOLOGISTA',
  //   'CIRURGIA PLASTICA',
  //   'CARDIOLOGIA'], 'ODONTOLOGIA', 'VETERINARIO'],
  //   tecnologia: ['SELECIONE', 'FRONT-END', 'BACK-END', 'DBA'],
  //   direito: ['SELECIONE', 'CRIMINAL', 'TRIBUTARIO', 'DEFENSORIA'],
  // };
  let cursoo = {
    saude: [
      {
        SELECIONE: ['SELECIONE'],
      },
      {
        MEDICINA: [
          'SELECIONE',
          'DERMATOLOGISTA',
          'CIRURGIA PLASTICA',
          'CARDIOLOGIA',
        ],
      },
      {
        ODONTOLOGIA: [
          'SELECIONE',
          'ORTODONTIA',
          'ENDODONTIA',
          'IMPLANTODONTIA',
        ],
      },
      {
        VETERINARIO: [
          'SELECIONE',
          'ZOONOSES',
          'INSPECAO ANIMAL',
          'VIGILANCIA SANITARIA',
        ],
      },
    ],
    tecnologia: ['SELECIONE', 'FRONT-END', 'BACK-END', 'DBA'],
    direito: ['SELECIONE', 'CRIMINAL', 'TRIBUTARIO', 'DEFENSORIA'],
  };

  // Object.keys(cursoo).forEach((key) => {
  //   console.log(key);
  // });

  Object.keys(cursoo).forEach((key) => {
    console.log(key);
  });
  // PROFISSÕES DE SAUDE
  let saude = ['SELECIONE', 'MEDICINA', 'ODONTOLOGIA', 'VETERINARIO'];

  let profissaoMed = [
    'SELECIONE',
    'DERMATOLOGISTA',
    'CIRURGIA PLASTICA',
    'CARDIOLOGIA',
  ];

  let profissaoOdonto = [
    'SELECIONE',
    'ORTODONTIA',
    'ENDODONTIA',
    'IMPLANTODONTIA',
  ];

  let profissaoVete = [
    'SELECIONE',
    'ZOONOSES',
    'INSPECAO ANIMAL',
    'VIGILANCIA SANITARIA',
  ];

  // PROFISSÕES DE TECNOLOGIA

  let tecnologia = ['SELECIONE', 'FRONT-END', 'BACK-END', 'DBA'];
  let profissaoFront = ['SELECIONE', 'REACT', 'VUE', 'ANGULAR'];
  let profissaoBack = ['SELECIONE', 'JAVA', 'C#', 'JAVASCRIP'];
  let profissaoDBA = ['SELECIONE', 'SQL', 'PYTHON', 'MONGODB'];

  let direito = ['SELECIONE', 'CRIMINAL', 'TRIBUTARIO', 'DEFENSORIA'];
  let profissaoCriminal = [
    'ADVOCACIA CRIMINAL',
    'CARGO DE DEFENSOR PUBLICO',
    'CARGO DE JUIZ',
  ];
  let profissaoTributaria = [
    'TRIBUTOS FEDERAIS',
    'LIMITACOES CONSTITUCIONAIS',
    'SISTEMA CONSTITUCIONAL TRIBUTARIO',
  ];
  let profissaoDefensoria = [
    'Defesa de acusados em processo disciplinar',
    'Assistência jurídica',
    'Sustentação de recursos e razões apresentados',
  ];

  console.log(areas);
  console.log(curso);
  console.log(prof);

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h1>Selecione sua profissão</h1>
          <form>
            <ul>
              {Object.keys(cursoo).forEach((key) => {
                <li key={key}>{key}</li>;
              })}
            </ul>
            <select onChange={(text) => setAreas(text.target.value)}>
              {area.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>

            <select onChange={(text) => setCurso(text.target.value)}>
              {areas == 'SAUDE'
                ? saude.map((data) => <option value={data}>{data}</option>)
                : areas == 'TECNOLOGIA'
                ? tecnologia.map((data) => <option value={data}>{data}</option>)
                : areas == 'DIREITO'
                ? direito.map((data) => <option value={data}>{data}</option>)
                : ''}
            </select>

            {/* PROFISSOES  */}

            <select onChange={(text) => setProf(text.target.value)}>
              {curso == 'MEDICINA'
                ? profissaoMed.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'ODONTOLOGIA'
                ? profissaoOdonto.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'VETERINARIO'
                ? profissaoVete.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'FRONT-END'
                ? profissaoFront.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'BACK-END'
                ? profissaoBack.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'DBA'
                ? profissaoDBA.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'CRIMINAL'
                ? profissaoCriminal.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'TRIBUTARIO'
                ? profissaoTributaria.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == 'DEFENSORIA'
                ? profissaoDefensoria.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : ''}
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};
