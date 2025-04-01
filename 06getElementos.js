//getElementById, aqui ele vai no documento html e pega o elemeto "main-text "por meio do id.
const elementId = document.getElementById("main-text");
console.log(elementId);

//getElementByClassName, aqui ele vai no documento html e pega os elementos por meio da class  paragraph.
const elementClass = document.getElementsByClassName("paragraph");
console.log(elementClass);

//getElementByTagName, aqui ele vai no documento html e pega os elementos por meio da Tag.
const elementTag = document.getElementsByTagName('h1');
console.log(elementTag);


//querySelector, aqui ele vai no documento html e pega o primeiro elemento que ele encontrar com mesmo nome.
const elementSelector = document.querySelector('.paragraph');
console.log(elementSelector);

//querySelectorAll, aqui ele vai no documento html e pega todos os elementos que ele encontrar com mesmo nome. um node list
const elementSelectorAll = document.querySelectorAll('.paragraph');
console.log(elementSelectorAll);

//attributes, pega os atributos do elemento selecionado.
const pegarInput = document.querySelector('input');
console.log(pegarInput.attributes);


// manipulando textos, estilos

const trocarTexto = document.querySelector('h1');
trocarTexto.innerText = "Mudei o titulo";
//          innerHTML coloca itens em html como p, h1, h6 ...

const alterarCor = document.querySelector('h1');
alterarCor.style.color = 'blue';

//trabalhando com eventos --- exemplo de evento de onclick num botão
const eventobotao = document.querySelector('button');
eventobotao.style.color = 'red'

eventobotao.onclick = () => {
    console.log('vc clicou no button');
}
