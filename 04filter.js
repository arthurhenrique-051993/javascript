/*------------------FILTER-----------------------------
Ele cria um novo array a partir do array pecorrido(array original )
cria um novo array APENAS com os elementos filtrados
Aceita 3 parâmetros
--item do array
--index
--array completo

*/
const car = [
    {brand: "Chevrolet", name:'Meriva', year: 2000},
    {brand: "Volksvagem", name:'Gol', year: 3000},
    {brand: "Hyundai", name:'Elantra', year: 2000},
    {brand: "Honda", name:'Civic', year: 3000},
    {brand: "Nissan", name:'Versa', year: 3000}
];

const justCar = car.filter(car => {
    return car.year >= 3000; //aqui estou pedindo para retornar apenas
                            //os itens que tem valor igual ou superior a 3000

});

console.log(car);
console.log(justCar);

//no filter ele seleciona so os itens que eu quiser 
//so retorna valores true

//novo exemplo, neste exemplo ocorre um filtro em todas as pessoas que tem idades maior ou igual a 28 anos

const  militares = [
    {nome: 'arthur', idade: 32},
    {nome: 'matheus', idade: 28},
    {nome: 'robson', idade: 33},
    {nome: 'marcos', idade: 27},
    {nome: 'leo', idade: 17}
];
const convocacao = []
for(let i = 0; i < militares.length; i++ ){ //mesma coisa do modelo acima dos carros, so que mais complexo
    if(militares[i].idade >=28){
        convocacao.push(militares[i])
    }
}
console.log(convocacao)