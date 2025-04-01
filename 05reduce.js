/*REDUCE
Retorna um valor(pode ser um novo array, um objeto, uma string, um number, etc.)
Aceita 4 parâmetros
---acumulador
---valor atual
----index
array completo
*/

const list = [2,3,4,5];

const sum = list.reduce((acc, current) => {
    return acc + current
},0);

console.log(sum);

/*
o que acontece no reduce, foi passado um parametro 0 para ele colocar no ACC
ele soma o ACC mais CURRENT(ITENS DO ARRAY) 0 + 2 o resultado
sera o novo current e ele vai repetir isso ate finalizar todos os itens do array
*/