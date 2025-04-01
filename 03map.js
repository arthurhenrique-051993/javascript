/*estudo sobre MAP
ele cria um novo array a partir do array percorrido(array original)
cria um novo array com a mesma quantidade de itens do array origial
aceita 3 paramentros
-----item do array
-----index
-----array completo

*/
//-------------------------------------------------------------------------------------------
const numbers = [1,2,3,4];
const students = [
    {name: "lucas", age: 25},
    {name: "augusto", age: 45},
    {name: "joao", age: 17},
    {name: "cardozo", age: 18},
    {name: "monteiro", age: 16},
];
const newArray = numbers.map((number) => {
    return number * 2;  //ele retorna tudo que vai ao lado do return
                        //console.log(number);------aqui ele exibe o array origial
});
console.log(numbers); //exibe o array original
console.log(newArray); //aqui ele pega e altera o array original de acordo com o que a função retorna


//-------------------------------------------------------------------------------------------

//mais um exemplo com o MAP

const soldiers = [
    {name: "Sd-Rubens", indentification: 102},
    {name: "Sd-Augusto", indentification: 103},
    {name: "Sd-joao", indentification: 104},
    {name: "Sd-cardozo", indentification: 105},
    {name: "Sd-monteiro", indentification: 106},
];
const newSoldiers = soldiers.map ((soldiers) => {
    const newSoldiers = {    //const com um objeto que esta sendo encrementado em cada index do array
        name: soldiers.name + '    B-G-P',
        indentification: soldiers.indentification - 100
    }    
    
    return newSoldiers;
});
console.log(soldiers);//exibe o array original
console.log(newSoldiers);//aqui ele pega e altera o array original de acordo com o que a função retorna

//com o map eu pego o array original e crio um novo array
//e coloco novos dados por meio da const newStudents

const car = [
    {brand: "Chevrolet", name:'Meriva', year: 2016},
    {brand: "Volksvagem", name:'Gol', year: 2023},
    {brand: "Hyundai", name:'Elantra', year: 2020},
    {brand: "Honda", name:'Civic', year: 2008},
    {brand: "Nissan", name:'Versa', year: 2024},
];

const newCar = car.map((car) => {
    const newCar = {
        name: car.name + ' Promoção',
        year: car.year + 1,
    }
    return newCar;    
});

console.log(car);
console.log(newCar);
//testando a incrementação de um novo parametro no array por meio do MAP
