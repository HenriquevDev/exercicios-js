var dinheiro;
const kilometrosLitro = 20;
const ValorCombustivel = 5;

function PegaValor(){
dinheiro = parseInt(prompt("Digite o valor",""));
}

function CalculaCombustivel(n){
let valor = n;
return valor / ValorCombustivel;
}

function CalculaKilometragem(n){
let QtdCombustivel = CalculaCombustivel(n);
return QtdCombustivel * kilometrosLitro;
}

PegaValor();
document.write("Voce abasteceu "+CalculaCombustivel(dinheiro)+" litros ");
document.write("Sua autonomia 'e "+CalculaKilometragem(dinheiro)+" Kilometros ");