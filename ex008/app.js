function salario(){
    let GanhosPorHora = document.getElementById("ganho").value 
    let HorasTrabalhadas = document.getElementById("horas").value
    let SalarioBruto = GanhosPorHora*HorasTrabalhadas*30
    let Ir=SalarioBruto*11/100
    let Inss=SalarioBruto*8/100
    let Sindicato=SalarioBruto*5/100
    let descontos = Ir+Inss+Sindicato
    let salarioliq = SalarioBruto-descontos
    document.getElementById("resposta").innerHTML = "Seu Sálario bruto é de " + SalarioBruto+",00R$" +"<br>"+"Esses são os descontos: " + "<br>" + "Ir: " + Ir +",00R$"+"<br>" +"Inss :" + Inss +",00R$" + "<br>" + "Sindicado :" + Sindicato +",00R$"+"<br>"+ "Sendo assim seu sálario liquido é de: " + salarioliq+ ",00R$"
 }