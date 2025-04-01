//O destructuring no JavaScript serve para extrair valores de arrays ou propriedades
//  de objetos e armazená-los em variáveis de forma mais concisa e legível. 
// Ele simplifica o acesso a elementos de um array ou propriedades de um objeto,
//  tornando o código mais limpo e eficiente.
//ex 
const numeros = [10, 20, 30];

// Sem destructuring
const a = numeros[0];
const b = numeros[1];
//console.log(a, b); // 10 20

// Com destructuring
const [x, y] = numeros;
//console.log(x, y); // 10 20

//🔹 Pulos e valores padrão
const [primeiro, , terceiro] = [1, 2, 3]; // Pula o segundo valor
//console.log(primeiro, terceiro); // 1 3

const [c = 5, d = 10] = [3]; // Se não houver valor, usa o padrão
//console.log(c, d); // 3 10

const chamada =[1,2,3] //outro uso do destructuring e o spreed - ou o mesmo que o push do array adicionar itens na lista.
const chamadaup = [...chamada,4,5]; //os tres pontos conta como o 1,2,3 da constante chamada. o 4 e o 5 são os numeos que serão adicionados
//console.log(chamadaup); 
