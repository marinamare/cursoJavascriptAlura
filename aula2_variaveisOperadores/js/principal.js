var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiroPaciente");
//acessar os dados do primeiro paciente

var tdPeso = paciente.querySelector(".info-peso"); // acessa a célula do peso
var peso = tdPeso.textContent; // acessa o conteúdo da célula do peso

var tdAltura = paciente.querySelector(".info-altura"); // acessa a célula da altura
var altura = tdAltura.textContent; // acessa o conteúdo da célula da altura

var tdIMC = paciente.querySelector(".info-imc"); //acessa a célular que corresponde ao IMC

//abaixo está a etapa de validação do código, a fim de evitar o cálculo do IMC em casos de uma das variáveis estar preenchida com um valor irreal

var pesoEhValido = true; //essa é a variável que, quando falsa, indica um peso inválido e impede o cálculo do IMC
var alturaEhValida = true; //essa é a variável que, quando falsa, indica uma altura inválida e impede o cálculo do IMC

if(peso =< 0 || peso >= 500){ // se o peso é menor ou igual a zero OU se é maior ou igual a 500
    console.log("Peso inválido") // imprimir no console "Peso inválido"
    pesoEhValido = false; // mudar a variável de validade do peso para false
    tdIMC.textContent = "Peso inválido!"; // imprimir na célula do IMC um alerta de "Peso inválido!"
} 
if(altura =< 0 || altura >= 3.00){ //se a altura é menor ou igual a zero OU se é maior ou igual a três metros
    console.log("Altura inválida!") // imprimir no console "Altura inválida"
    alturaEhValida = false; // mudar validade da altura para false
    tdIMC.textContent = "Altura inválida!" // imprimir na célula do IMC "Altura inválida!"
}

if(alturaEhValida && pesoEhValido){ //se a altura é válida e o peso também é válido
    var IMC = peso / (altura * altura); //a variável IMC é criada, sendo igual ao peso dividido pela altura ao quadrado
    tdIMC.textContent = IMC //substitui o conteúdo da célula do IMC pelo IMC calculado
}
