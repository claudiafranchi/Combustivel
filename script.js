let etanol, gasolina ;

function calcular(){
    etanol = formularioFlex.valorEtanol.value.replace(",",".");
    gasolina = parseFloat(formularioFlex.valorGasolina.value.replace(",","."));

    if(etanol <= (0.72 * gasolina)){
        document.querySelector('#status').src = "alcool.png";
    }else{
        document.querySelector('#status').src = "gasolina.png";
    }
}
function limpar(){
    document.querySelector('#status').src = "neutro.png";
}