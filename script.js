function funcao_subtrair() {
  let nota1 = document.getElementById('n1').value;
  let nota2 = document.getElementById('n2').value;
  let subtracao = (parseInt(nota1) - parseInt(nota2));
  document.getElementById('resultado').innerHTML = 'Subtração= '+subtracao;

}

function funcao_somar() {
  let nota1 = document.getElementById('n1').value;
  let nota2 = document.getElementById('n2').value;
  let soma = (parseInt(nota1) + parseInt(nota2));
  document.getElementById('resultado').innerHTML = 'Adição= ' + soma;

}

function funcao_multiplicar() {
  let nota1 = document.getElementById('n1').value;
  let nota2 = document.getElementById('n2').value;
  let multiplicacao = (parseInt(nota1) * parseInt(nota2));
  document.getElementById('resultado').innerHTML = 'Multiplicação= ' + multiplicacao;

}

function funcao_dividir() {
  let nota1 = document.getElementById('n1').value;
  let nota2 = document.getElementById('n2').value;
  let divisao = (parseInt(nota1) / parseInt(nota2));
  document.getElementById('resultado').innerHTML = 'Divisão= ' + divisao;

}