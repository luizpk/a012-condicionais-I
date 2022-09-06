

let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade."));
if(idade>=18){
    alert(`${nome}, vocé é maior de idade!`)
}else{
	alert(`${nome}, você ainda não atingiu a maioridade.`)
}


let terminouEM = prompt(`${nome}, você terminou o Ensino Médio?
Digite Sim ou Não`)
if(terminouEM===("Sim"&&"sim")){
    alert(`Parabêns ${nome}! 
           Você tem o Ensino Médio concluído!`)
    let isCursandoOutraFaculdade = ( prompt(`${nome}, Você está cursando Ensino Superior?
    Digite Sim ou Não`))
     if(isCursandoOutraFaculdade===("Sim"&&"sim")){
        alert("Isso mesmo, você está no caminho certo!")
     } else{
        alert(`${nome}, você precisa completar seus estudos.`)
     }      
}else{
	alert(`${nome}, você precisa completar seus estudos.`)
}

