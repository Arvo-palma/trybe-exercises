const newEmployees = () => {
    const employees = {
      id1: candidate('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: candidate('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: candidate('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const candidate = (nomeCompleto) => {
  let arrayCandidato = nomeCompleto.split(' ');
  let emailFormat = `${arrayCandidato[0]}_${arrayCandidato[1]}@trybe.com`;
  let dadosDoCandidato = {
    nome: nomeCompleto,
    email: emailFormat.toLowerCase(),
  }
  return dadosDoCandidato;
}

console.log(newEmployees());