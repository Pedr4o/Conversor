const buttonConverte = document.querySelector(".buttonConverte");
const seletoresmoeda = document.querySelector(".seletoresmoeda");

function valoresConvertidos() {
    const inputvalor = document.querySelector(".inputvalor").value;
    const valorConvertbr = document.querySelector(".valorConvertbr")
    const valorConvertdolar = document.querySelector(".valorConvertdolar")

    const dolarHoje = 5.60;
    const euroHoje = 6.00;
    const libraHoje = 7.10;
    const yenesHoje = 0.031;


    valorConvertbr.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'

    }).format(inputvalor);

    if (seletoresmoeda.value == 'dolar') {
        valorConvertdolar.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputvalor / dolarHoje);
    }
    if (seletoresmoeda.value == 'euro')
        valorConvertdolar.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputvalor / euroHoje);

    if (seletoresmoeda.value == 'libra')
        valorConvertdolar.innerHTML = new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputvalor / libraHoje);

    if (seletoresmoeda.value == 'yenes') {
        valorConvertdolar.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',

        }).format(inputvalor / yenesHoje);
    }

}

function trocadeMoeda() {
    const trocaDemoeda = document.querySelector('#trocaDmoeda');
    const trocaImg = document.querySelector('#usdimg');

    if (seletoresmoeda.value == 'dolar') {
        trocaDemoeda.innerHTML = 'Dólar';
        trocaImg.src = '../assents/estados-unidos (1) 1.png'
    }

    if (seletoresmoeda.value == 'euro') {
        trocaDemoeda.innerHTML = 'Euro';
        trocaImg.src = '../assents/euro.png';

    }

    if (seletoresmoeda.value == 'libra') {
        trocaDemoeda.innerHTML = 'Libra';
        trocaImg.src = '../assents/libra 1.png';

    }

    if (seletoresmoeda.value == 'yenes') {
        trocaDemoeda.innerHTML = 'Yenes';
        trocaImg.src = '../assents/bitcoin 1.png';


    }
            

    valoresConvertidos()

}






seletoresmoeda.addEventListener("change", trocadeMoeda);


buttonConverte.addEventListener("click", valoresConvertidos);
