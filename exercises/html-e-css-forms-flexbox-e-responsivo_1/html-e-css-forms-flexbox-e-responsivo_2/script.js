function addState() {
  const brazilStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for(let index = 0; index < brazilStates.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = brazilStates[index];
    document.querySelector('#state').appendChild(option);
  }
}

addState();

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

let tipoDeResidencia;

function residenceType(event) {
  if (event.target === tipoDeResidencia1) {
    tipoDeResidencia = 'Casa';
  }
  if (event.target === tipoDeResidencia2) {
    tipoDeResidencia = 'Apartamento';
  }
}

tipoDeResidencia1.addEventListener('click', residenceType);

tipoDeResidencia2.addEventListener('click', residenceType);

let stateSelected = false;
let residenceTypeSelected = false;

estado.addEventListener('click', function() {
  stateSelected = true;
});

tipoDeResidencia1.addEventListener('click', function() {
  residenceTypeSelected = true;
});

tipoDeResidencia2.addEventListener('click', function() {
  residenceTypeSelected = true;
});

function createSubmit() {
  let submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Enviar';
  submitBtn.type = 'submit';
  submitBtn.id = 'submit';
  submitBtn.class = 'btn btn-primary';
  document.querySelector('#form').appendChild(submitBtn);
}

createSubmit();

document.getElementById('start-date').DatePickerX.init();

function stopDefAction(event) {
  event.preventDefault();
}

// document.querySelector('#submit').addEventListener('click', stopDefAction, validation, false);

// document.querySelector('#submit').addEventListener('click', validation, false);

// let error = document.querySelector('#error');

// function validation() {
//   if (nome.value === "") {
//     error.innerHTML = 'Erro no preenchimento 1';
//   }
//   if (email.value === "") {
//     error.innerHTML = 'Erro no preenchimento 2';
//   }
//   if (cpf.value === "") {
//     error.innerHTML = 'Erro no preenchimento 3';
//   }
//   if (endereco.value === "") {
//     error.innerHTML = 'Erro no preenchimento 4';
//   }
//   if (cidade.value ==="") {
//     error.innerHTML = 'Erro no preenchimento 5';
//   }
//   if (stateSelected === false) {
//     error.innerHTML = 'Confirme estado';
//   }
//   if (residenceTypeSelected === false) {
//     error.innerHTML = 'Erro no preenchimento 6';
//   }
//   if (resumo.value === "") {
//     error.innerHTML = 'Erro no preenchimento 7';
//   }
//   if (cargo.value === "") {
//     error.innerHTML = 'Erro no preenchimento 8';
//   }
//   if (descricaoCargo.value === "") {
//     error.innerHTML = 'Erro no preenchimento 9';
//   }
//   if (dataDeInicio.type !== 'date') {
//     error.innerHTML += 'Formato errado de data';
//   }
//   if (dataDeInicio[8] + dataDeInicio[9] <= 00 || dataDeInicio[8] + dataDeInicio[9] > 31) {
//     error.innerHTML += 'Dia de início errado';
//   }
//   if (dataDeInicio[5] + dataDeInicio[6] <= 00 || dataDeInicio[5] + dataDeInicio[6] > 12) {
//     error.innerHTML += 'Mês de início errado';
//   }
//   if (dataDeInicio[0] + dataDeInicio[1] < 0) {
//     error.innerHTML += 'Ano errado';
//   }
//   if (error.innerHTML === "") {
//     error.innerHTML = 'name: ' + nome.value + '; email: ' + email.value + '; CPF: ' + cpf.value + '; endereço: ' + endereco.value + '; cidade: ' + cidade.value + '; estado: ' + estado.value + '; tipo de residência: ' + tipoDeResidencia + '; resumo do currículo: ' + resumo.value + '; cargo: ' + cargo.value + '; descrição do cargo: ' + descricaoCargo.value + '; data de inicio: ' + dataDeInicio.value;
//   }
// }

function reloadPage() {
  location.reload();
}

document.querySelector('#cancel').addEventListener('click', reloadPage);

