function addState() {
  const brazilStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for(let index = 0; index < brazilStates.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = brazilStates[index];
    document.querySelector('#state').appendChild(option);
  }
}

addState();

function stopDefAction(event) {
  event.preventDefault();
}

// document.addEventListener(
//   'click', stopDefAction, false
// );

let nome = document.querySelector('#name');
let email = document.querySelector('#e-mail');
let cpf = document.querySelector('#CPF');
let endereco = document.querySelector('#adress');
let cidade = document.querySelector('#city');
let estado = document.querySelector('#state');
let tipoDeResidencia1 = document.querySelector('#residence-type1');
let tipoDeResidencia2 = document.querySelector('#residence-type2');
let resumo = document.querySelector('#resume');
let cargo = document.querySelector('#role');
let descricaoCargo = document.querySelector('#role-description');
let dataDeInicio = document.querySelector('#start-date');

let stateSelected = false;
let residenceTypeSelected = false;

estado.addEventListener('click', changed(){
  stateSelected = true;
});

tipoDeResidencia1.addEventListener('click', changed(){
  residenceTypeSelected = true;
});

tipoDeResidencia2.addEventListener('click', changed(){
  residenceTypeSelected = true;
});

function validation() {
  let valid = true;
  let message;
  if (nome.length > 40 || nome.innerText === "") {
    valid = false;
    message = 'Nome incorreto';
  }
  if (email.length > 50 || email.innerText === "") {
    valid = false;
    message += '/ email incorreto';
  }
  if (cpf.length > 11 || cpf.innerText != Number) {
    valid = false;
    message += '/ cpf incorreto';
  }
  if (endereco.length > 200 || endereco.innerText === "") {
    valid = false;
    message += '/ Endereço incorreto';
  }
  if (cidade.length > 28 || cidade.innerText ==="") {
    valid = false;
    message += '/ Nome de cidade incorreto';
  }
  if (estado.length != 27 || stateSelected === false) {
    valid = false;
    message += '/ Selecione estado';
  }
  if (residenceTypeSelected === false) {
    valid = false;
    message += '/ Selecione o tipo de residência';
  }
}