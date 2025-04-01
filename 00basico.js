//var, let, const ----variaveis são espaços alocados na memoria 
var idade = 10; //não se usa mais, por sofre alteração dentro e fora do escopo
let nome = "arthur" //prestar atenção dentro e fora do escopo-- alteração de valor so ocorre dentro do escopo--{}--
const cpf = "04791510160"; //constante não altera seu valor
//console.log(typeof cpf)  //para descobrir que tipo dados e a variavel 

//--------------------------------------------------------------------------------------------
//operadores 
let a = 10;
let b = 20;

//console.log( a != b );   -----> != <-----   esse simbolo significa diferente

//--------------------------------------------------------------------------------------------
/*  
    = operador de atribuição.
    == operador que valida se os valores são iguais, independente do tipo se for string ou numérico.
    === operador que valida tanto os valores, quanto ao seu tipo, se for igual recebe true,diferente false.(mais usado)
    
    !== totalmente diferente-- ele verifica o tipo de dado
    !=  operador de diferença
    &&  (e) operador de logica que precisa validar duas condições como verdadeiras, se uma der errado e false!
    || (ou) operador de logica que valida uma das condiçoes como verdadeira para passa o codigo, so precisa de uma das condições ser verdadeira.
    ++ ou -- operador incremental ou decremental.
    !  negação

*/
//--------------------------------------------------------------------------------------------
/*operadores ternario ou condicional
            ele funciona como um if else onde o (?) valida a informação anterior,
            no caso do exercicio ele valida se rain e false se passar ele acusa no primeiro item
            se não (:) ele vai no segundo item.
    ? se
    : se não
*/
const rain = true;
const umbrela = rain ? 'levar guara chuva' : 'deixar guarda chuva';
//console.log(`Esta chuvendo ? Eu preciso ${umbrela} !` )

// pode haver mais de uma validação com os operadores ternarios 
const maiorIdade = 25;
const categoria = maiorIdade < 12 ? "Criança" : maiorIdade < 18 ? "Adolescente" : maiorIdade < 60 ? "Adulto" : "Idoso";
//console.log(categoria); // "Adulto"

//console.log(umbrela)

//mais um exercicio, nesse exercicio se faz a conferencia dos tres itens abaixo, se caso passar ele exibe
//se os tres itens for true ele exibe tranferencia realizada, se der falso algum dos itens, ele dar um transferencia negada
const balance = true;
const isNotBlocked = false;
const accountExist = true;

const transferOK = balance && isNotBlocked && accountExist ? 'transfeencia realizada' : 'transferencia negada';

//console.log(transferOK)

//--------------------------------------------------------------------------------------------
//tipos de dados (string)
let myFistName = "Arthur henrique" // com aspas dulplas "", com aspas simples '', e com crase ``...
// console.log(`eu sei juntar seu nome ${myFistName}`)
// a crase e usada para colocar as variaveis dentro da string ou fazer em multiplas linhas

//--------------------------------------------------------------------------------------------
//number
let age = 31; //simles, nada o que acrescentar

//--------------------------------------------------------------------------------------------
//object      ---------mais simples para criar uma captura de dados dos usuarios onde se preciso de varias informações
const myFutureCar = {
    brand: "Hyundai",// -------isso e um atributos
    name: "Creta",
    age: 2024,
    mileage: 53.450,
    price: 90.300,
    color: {   //dentro dos objetos e possivcel colocar novos atributos 
        primaryColor:"white",
        secundaryColor:"black"
    }
}

// exemplo -------------console.log(myFutureCar.color.primaryColor);

//--------------------------------------------------------------------------------------------
//boleanos são valores true e false, são usados muito para validar condições
let myAge = 31; //numerico
let  = tempService = "31"; //string

//console.log(myAge == tempService);  //== significa se os valores são iguais
//console.log(myAge === tempService); //=== significa que os valores são totalmente iguais 

//--------------------------------------------------------------------------------------------
//IF, ELSE IF, ELSE
    /*Estrutura condicional(CONTROLE DE FLUXO) onde se usa o if, else if, e o else,serve pra escolher um caminho.
    let cor = "vermelho";
    
    if(cor === "verde"){
        console.log("siga");
    }else if(cor ==="amarelo"){
        console.log("atenção");
    }else if (cor ==="vermelho"){
        console.log("pare");
    }else{
        console.log("deu errado");
    }
    */

//--------------------------------------------------------------------------------------------
//SWITCH
/*switch  e uma estrutura de controle com opções pre-determinadas (CONTROLE DE FLUXO),
com ela consigo ver qual expressão que preciso analisar e também seus casos,
e se o caso for executado eu preciso informar para ele freiar o codigo---->break<----

let year = 202;
    switch (year){
        case 2022:
        console.log("este e o ano 2022");
        break;
        case 2023:
        console.log("este e o ano 2023")
        break
        case 2024:
            console.log("este e o ano 2024")
        break;
        default:
            console.log("não encontrado");
    }
    console.log(year); //nesse exemplo ele mostra (não encontrado)

*/

//--------------------------------------------------------------------------------------------
//FOR
/*A Estrutura de repetição (FOR) é usada para criar laços que executam um bloco 
de código repetidamente até que uma condição especificada seja falsa.
O que Eu realmente entendi, o for passa varias vezes pelo mesmo bloco de codigo, até completar seu objetivo.

--------------for -- inicialização (i =0 ); condição "ate quando"(i <= 10); incremento "o que vai acontecer a cada ciclo"(i++)) {--------------
--------------    // bloco de código a ser executado
--------------}

for (i = 0; i <= 10; i++){ //---------a letra I e usado para informar que isso e um (i)ndex, comum usada.
    console.log(i); //nesse exemplo ele mostra os numeros 0,1,2,3,4,5,6,7,8,9,10
}

MAIS UM EXEMPLO
nesse exemplo, eu tenho um array passando nomes de carro, o for vai do index 0 ate o 4, 
ele vai contar do index ate o tamanho do array (cars.length) e somar mais um em cada passagem, 
enquanto o meu (i) for menor que o total do array ele vai executar o código.  

const cars = ["corsa", "celta", "astra", "gol" ,"clio"]
for(i = 0; i < cars.length; i ++ ){
    console.log(`${cars[i]} e um carro bom e barato!`);
}
*/
//--------------------------------------------------------------------------------------------
/*--------------------FOR OF------------------------------
É uma estrutura de repetição que permite percorrer os elementos de um objeto iterável,
como arrays, strings, Map, Set e outros objetos que implementam a interface iterável.
ele percorre item por item do array sem precisar da necessidade de usar 
uma CONDIÇÃO e um INCREMENTO como no for.Usado quando a necessiade dele percorrer 
todos os elementos do array, não há a necessidade de dizer quando ele deve parar.
*/
let allNames = ['Arthur','Henrique','Nunes','Barbosa']
for (let name of allNames[1]){
    //console.log(name); //neste exemple ele exibe: Arthur Henrique Nunes Barbosa
}
//--------------------------------------------------------------------------------------------
/*--------------------FOR in------------------------------
E uma estrutura de repetição usada para interar propriedade por propriedade >>>>dentro do objeto<<<<<.
*/
const sacola = {
    fruta: 'banana',
    carne: 'costela',
    limpeza: 'sabão',
    sereal: 'arroz'
}
for (let mercado in sacola){
    //console.log(sacola);  //neste exemple ele exibe: fruta carne limpeza sereal
    //console.log(sacola[mercado]);  //neste exemplo ele exibe: banana costela sabão arroz
}
//--------------------------------------------------------------------------------------------
/*--------------WHILE(ENQUANTO) ESTUTURA DE REPETIÇÃO-----------------
No JavaScript, o laço while é usado para executar 
repetidamente um bloco de código enquanto uma condição 
especificada for avaliada como verdadeira (true).
*/
let i = 0; // Inicializa a variável

while (i <= 5) { // Define a condição: enquanto i for menor que 5
  //console.log(i); // Imprime o valor de i
  i++; // Incrementa i em 1
}
/*--------------DO WHILE(ENQUANTO) ESTUTURA DE REPETIÇÃO-----------------
A principal vantagem do do...while sobre o while é que o bloco de código 
é garantido ser executado pelo menos uma vez, mesmo que a condição inicial
seja falsa. Isso pode ser útil em situações onde você precisa que uma ação
 seja realizada pelo menos uma vez antes de uma verificação de condição.*/
var n = 0;
do{
    //console.log(n);
    n++;
}while(n <=3);

// --------------propriedades da biblioteca MATH--------------------------
//console.log(Math.PI); // uma constante matematica
//console.log(Math.pow(2,3)); // permite usarmos potençia ex---> dois elevado a 3
//console.log(Math.sqrt(25,5)) // permite usarmos a raiz quadrada de um numero
//console.log(Math.random()) //mostra um numero aleatorio entre 0 e 1
//console.log(Math.ceil(23.6)) // ele arredonda o numero para cima
//console.log(Math.floor(23.6))// ele arredonda o numero para baixo



