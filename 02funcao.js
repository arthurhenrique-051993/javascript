//função simples 
function sports() {
    console.log("passando a função");
}
//sports(); //chamando a função
//--------------------------------------------------------------------------------------------
//função passando paramentros
function persona(name, age, address){ //----entre os paranteses e passado os parametros
    console.log(`o seu nome ${name} a sua idade é ${age} anos e o seu endereço é ${address}.`);
}
//persona("arthur" , 31, "Qd 2 conj 2 casa 15"); //aqui eu adiciono quais paramentros eu quero que seja mostrado na tela.

/*----------------RETURN----------------------------------------------------------------------
Em JavaScript, o comando return é usado dentro de uma função 
para especificar o valor que a função deve retornar quando é chamada. 
Além disso, return também serve para encerrar a execução da função imediatamente.
Quando o return é executado, a função termina imediatamente.
Qualquer código após o return dentro da mesma função não será executado.*/
function sun(numberOne,numberTwo) { //esse e o modelo para escrita de uma função com parametros
    return numberOne + numberTwo;
}
//console.log(sun(7,6));
//-------------------------------------------------------------------------------------------- +1 exemplo
function multiplicar(valorUm, valorDois) {
    return valorUm * valorDois;
  }
  
let resultado = multiplicar(3, 4); // resultado agora é 12
//console.log(resultado);


//--------------------------------------------------------------------------------------------
//uso de Arrow functions--------- mais usada nos codigos 
const construir = () => { //modelo simples de arrom function
    console.log("construindo uma Arrow ");
    
}
//construir();

//--------------------------------------------------------------------------------------------
const soma = (one,two) => { //Arrom functions com parametros
   return one + two;
}
const one = 10;
const two = 20;

//console.log(result = soma(one,two));


//exercicos de calculadora com funções
//nesse exercicio foi usado uma arrow function + switch

const calculate = (cal1, cal2, operation) => {
    let result

    switch(operation){
        case "+":
            result = cal1 + cal2;
        break;

        case "-":
            result = cal1 - cal2;
        break;

        case "*":
            result = cal1 * cal2;
        break;

        case "/":
            result = cal1 / cal2;
        break;

        default:
            console.log("erro");
            break;
    }
    return result;
}

//console.log(calculate(2,4,'*'));

