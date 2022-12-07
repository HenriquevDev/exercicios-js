function combustivel(){
    let dinheiro = document.getElementById("dinheiro").value 
    let combustivel = dinheiro / 5
    document.getElementById("resposta").innerText = "você tera " + combustivel + " litro/s " + "e seu carro andara: " +combustivel*20+"km"
}