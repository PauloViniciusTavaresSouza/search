<select
  name="profissao"
  value={options}
  onChange={(option) => setOptions(option.target.value)}
>
  <option value="">Selecione</option>
  <option value="1">Saúde</option>
  <option value="2">Tecnologia</option>
  <option value="3">Direito</option>
</select>;

{
  /* PRIMEIRA OPÇÃO  */
}

{
  options == 1 ? (
    <select
      name="saude"
      value={secondOption}
      onChange={(secondoption) => setSecondOption(secondoption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="1.1">Medicina</option>
      <option value="1.2">Odontologia</option>
      <option value="1.3">Veterinario</option>
    </select>
  ) : options == 2 ? (
    <select
      name="tecnologia"
      value={secondOption}
      onChange={(secondoption) => setSecondOption(secondoption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="2.1">Fron-end</option>
      <option value="2.2">Back-end</option>
      <option value="2.3">DBA</option>
    </select>
  ) : options == 3 ? (
    <select
      name="Direito"
      value={secondOption}
      onChange={(secondoption) => setSecondOption(secondoption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="3.1">Criminal</option>
      <option value="3.2">Tributário</option>
      <option value="3.3">Defensoria Pública</option>
    </select>
  ) : (
    ''
  );
}

{
  /* SEGUNDA OPÇÃO SAUDE */
}

{
  secondOption == 1.1 ? (
    <select
      name="medicina"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="1.1.1">Dermatologia</option>
      <option value="1.1.2">Cirurgia plástica</option>
      <option value="1.1.3">Cardiologia</option>
    </select>
  ) : secondOption == 1.2 ? (
    <select
      name="odontologia"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="1.2.1">Ortodontia</option>
      <option value="1.2.2">Endodontia</option>
      <option value="1.2.3">Implantodontia</option>
    </select>
  ) : secondOption == 1.3 ? (
    <select
      name="Veterinario"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="1.3.1">Zoonoses</option>
      <option value="1.3.2">Inspeção animal</option>
      <option value="1.3.3">Vigilância sanitária</option>
    </select>
  ) : (
    ''
  );
}

{
  /* SEGUNDA OPÇÃO TECNOLOGIA */
}

{
  secondOption == 2.1 ? (
    <select
      name="fronend"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="2.1.1">REACT</option>
      <option value="2.1.2">VUE</option>
      <option value="2.1.3">ANGULAR</option>
    </select>
  ) : secondOption == 2.2 ? (
    <select
      name="backend"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="2.2.1">Java</option>
      <option value="2.2.2">JavaScript</option>
      <option value="2.2.3">C#</option>
    </select>
  ) : secondOption == 2.3 ? (
    <select
      name="DBA"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="2.3.1">SQL</option>
      <option value="2.3.2">Python</option>
      <option value="2.3.3">MongoDB</option>
    </select>
  ) : (
    ''
  );
}

{
  /* SEGUNDA OPÇÃO DIREITO */
}

{
  secondOption == 3.1 ? (
    <select
      name="criminal"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="3.1.1">Advocacia criminal</option>
      <option value="3.1.2">Cargo de defensor público</option>
      <option value="3.1.3">Cargo de juiz</option>
    </select>
  ) : secondOption == 3.2 ? (
    <select
      name="tributaria"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="3.2.1">Tributos Federais</option>
      <option value="3.2.2">Limitações Constitucionais</option>
      <option value="3.2.3">Sistema Constitucional Tributário</option>
    </select>
  ) : secondOption == 3.3 ? (
    <select
      name="defensoria"
      value={thirdOption}
      onChange={(thirdOption) => setThirdOption(thirdOption.target.value)}
    >
      <option value="">Selecione</option>
      <option value="3.3.1">Defesa de acusados em processo disciplinar</option>
      <option value="3.3.2">Assistência jurídica</option>
      <option value="3.3.3">
        Sustentação de recursos e razões apresentados
      </option>
    </select>
  ) : (
    ''
  );
}

// profissao: 'Selecione',
// profissao: 'DEMARTOLOGISTA',
// profissao: 'CIRURGIA PLASTICA',
// profissao: 'CARDIOLOGIA',
// profissao: 'ORTODONTIA',
// profissao: 'ENDODONTIA',
// profissao: 'IMPLANTODONTIA',
// profissao: 'ZOONOSES',
// profissao: 'INSPECAO ANIMAL',
// profissao: 'VIGILANCIA SANITARIA',
// profissao: 'REACT',
// profissao: 'VUE',
// profissao: 'ANGULAR',
// profissao: 'JAVA',
// profissao: 'C#',
// profissao: 'JAVASCRIP',
// profissao: 'SQL',
// profissao: 'PYTHON',
// profissao: 'MONGODB',
// profissao: 'ADVOCACIA CRIMINAL',
// profissao: 'CARGO DE DEFENSOR PUBLICO',
// profissao: 'CARGO DE JUIZ',
// profissao: 'TRIBUTOS FEDERAIS',
// profissao: 'LIMITACOES CONSTITUCIONAIS',
// profissao: 'SISTEMA CONSTITUCIONAL TRIBUTARIO',
// profissao: 'Defesa de acusados em processo disciplinar',
// profissao: 'Assistência jurídica',
// profissao: 'Sustentação de recursos e razões apresentados',
