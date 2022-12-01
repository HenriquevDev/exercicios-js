var imgAtual = "lampada.jpg";
var imgAnterior = "lampada-on.jpg";

function trocar(){
    document.getElementById("lamp").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}