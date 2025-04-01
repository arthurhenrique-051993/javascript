/*ARRAY (MATRIZES)conjunto de dados sendo passado valores  
é uma estrutura de dados que permite armazenar e organizar múltiplos valores em uma única variável. 
Arrays podem conter qualquer tipo de dado, incluindo números, strings, objetos e até outros arrays. 
Eles são úteis para gerenciar listas de itens de forma eficiente e flexível.
*/
//array simples
const birthdayMyFamily = ['16','06','28'];
//console.log(birthdayMyFamily[1]); //resultado 06

//--------------------------------------------------------------------------------------------
const medicalAreas = [//Arrays dentro de um array
    ['rubens','matheus','gustavo'],
    ['teste1', 'teste2','teste3'],
]
//console.log(medicalAreas[1][2]); //resultado (bloco dos testes , teste3)

//--------------------------------------------------------------------------------------------
const myFriendyAtWork = [   //array com string
    "Bruno",
    "Gustavo",
    "Glauber",
    "Marcos"
]
//console.log(myFriendyWork[2]); //resultado Glauber

//--------------------------------------------------------------------------------------------
const myFamily = new Array("Lorenna","Davi","Sarah"); //pode se declarar um array com o construtor new Array
//console.log(myFamily[1]);//resultado Davi

//--------------------------------------------------------------------------------------------
const monthsOfMyBirthday = [1,2,3,4,5,6,7,8,9,10,11,12] //com números
//console.log(monthsOfMyBirthday[4]);//resultado 5

//--------------------------------------------------------------------------------------------
//mais um exemplo
const schoolTeachers = [{  //nesse exemplo colocamos objetos dentro do array... 
    name: "Catia",
    age: 37,
    material: "Geografia"
},
{
    name: "Rubens",
    age: 24,
    material: "Matematica"
},
{
    name: "Dora",
    age: 45,
    material: "Portugues"
},
{
    name: "Leo",
    age: 31,
    material: "Historia"
},
]
//console.log(schoolTeachers[2]);//resultado 'Dora'

//--------------------------------------------------------------------------------------------
const students = ['joao','mario','jose','carlos','bia']
students.push('marcos');//o push serve para adicionar elementos ao array
students.push('rubens');
//console.log(students); //resultado joao, mario, jose, carlos,bia, marcos, rubens

//--------------------------------------------------------------------------------------------
const letras = ['A','B','C','D','E']
letras.length; // o LENGTH DIZ O TAMANHO DO ARRAY 
//console.log(letras); //resultado 5

//--------------------------------------------------------------------------------------------
const soldiers = ['braga','afonso','guerra','batalha','cristopher']
 // o SORT ORGANIZA O ARRAY POR ORDEM ALFABÉTICA
//console.log(soldiers.sort()); //resultado >>> 'afonso,batalha,braga,cristopher,guerra'

//--------------------------------------------------------------------------------------------
const mon = ['lorenna','miriam','jaque','erika']
 // o DELETE ---DELATA o item selecionado
delete mon[3];
//console.log(mon);resultado >>> erika e excluida

mon.splice(0,1);//o splice tira itens do arrai por paramentros
//console.log(mon);// primeiro numero e a partir de onde ele vai tirar
                //segundo numero e quantos ele vai tirar


//-------------estudo sobre for each- ele serve para percorrer item por item no arrays-----
//media de idades dos alunos num array

//--------------------------------------------------------------------------------------------
const alunos = [
    {name: "lucas", age: 25},
    {name: "augusto", age: 45},
    {name: "joao", age: 17},
    {name: "cardozo", age: 18},
    {name: "monteiro", age: 16},

];
//usando functions
//console.log(alunos);

let allAlunosAge = 0;

alunos.forEach((alunos, index) => {
    allAlunosAge += alunos.age;
});

const averageAge = allAlunosAge / alunos.length;

//console.log(`a media e ${averageAge.toFixed(0)}`);

// usando if dentro de uma estrutura de repetição

var frutas = ["banana", "maça", "goiaba", "acerola"];
for(var i = 0; i< frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'goiaba'){
        break
    }
}
//neste exemplo eu tenho um array, por meio do for ele vai fazer uma exibição no console de todos os itens, 
//mas como estou usando o if ele vai brekar no item que foi designinado bleck