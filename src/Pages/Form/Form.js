import React from "react";
import styles from "./Form.module.css";

export const Form = () => {
  const [area, setArea] = React.useState([]);
  const [curso, setCurso] = React.useState([]);
  const [prof, setProf] = React.useState([]);


  const areasAndProfessionMapper = [
    {
      area: "TECNOLOGIA",
      specializations: {
        frontEnd: ["SELECT", "VUE", "REACT", "ANGULAR"],
        backEnd: ["SELECIONE", "JAVA", "C#", "JAVASCRIPT"],
        DBA: ["SELECIONE", "SQL", "PYTHON", "MONGODB"],
      },
    },
    {
      area: "SAUDE",
      specializations: {
        MEDICINA: [
          "SELECIONE",
          "DERMATOLOGISTA",
          "CIRURGIA PLASTICA",
          "CARDIOLOGIA",
        ],
        ODONTOLOGIA: [
          "SELECIONE",
          "ORTODONTIA",
          "ENDODONTIA",
          "IMPLANTODONTIA",
        ],
        VETERINARIO: [
          "SELECIONE",
          "ZOONOSES",
          "INSPECAO ANIMAL",
          "VIGILANCIA SANITARIA",
        ],
      },
    },
    {
      area: "DIREITO",
      specializations: {
        CRIMINAL: [
          "ADVOCACIA CRIMINAL",
          "CARGO DE DEFENSOR PUBLICO",
          "CARGO DE JUIZ",
        ],
        TRIBUTARIO: [
          "TRIBUTOS FEDERAIS",
          "LIMITACOES CONSTITUCIONAIS",
          "SISTEMA CONSTITUCIONAL TRIBUTARIO",
        ],
        DEFENSORIA: [
          "Defesa de acusados em processo disciplinar",
          "Assistência jurídica",
          "Sustentação de recursos e razões apresentados",
        ],
      },
    },
  ];

  const areaFinder = areasAndProfessionMapper.find(
    (selectedArea) => selectedArea.area === area
  );

  /**
   *
   * @param {Object} areaActuation Returns an object containing all the data related to a giver area.
   */
  const specializationsHandler = (areaActuation) => {
    const specs = Object.keys(areaActuation.specializations);
    return specs.map((specialization) => (
      <option value={specialization}>{specialization}</option>
    ));
  };

  const areasNames = areasAndProfessionMapper.map(area => area.area)

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h1>Selecione sua profissão</h1>
          <form>
            <ul>
              {areasNames.map((key) => {
                <li key={key}>{key}</li>;
              })}
            </ul>
            <select onChange={(text) => setArea(text.target.value)}>
              {areasNames.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>

            <select onChange={(text) => setCurso(text.target.value)}>
              {area && area.length !== 0 && specializationsHandler(areaFinder)}
            </select>

            {/* PROFISSOES  */}

            {/* <select onChange={(text) => setProf(text.target.value)}>
              {curso == "MEDICINA"
                ? profissaoMed.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "ODONTOLOGIA"
                ? profissaoOdonto.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "VETERINARIO"
                ? profissaoVete.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "FRONT-END"
                ? profissaoFront.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "BACK-END"
                ? profissaoBack.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "DBA"
                ? profissaoDBA.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "CRIMINAL"
                ? profissaoCriminal.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "TRIBUTARIO"
                ? profissaoTributaria.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : curso == "DEFENSORIA"
                ? profissaoDefensoria.map((data) => (
                    <option value={data}>{data}</option>
                  ))
                : ""}
            </select> */}
          </form>
        </div>
      </div>
    </section>
  );
};
