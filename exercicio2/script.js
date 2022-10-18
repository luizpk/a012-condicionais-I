// # Exercício 2

// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// const idade = Number(prompt("Qual a sua idade?"))

// const ensinoMedio = confirm("Você terminou o ensino médio?")

// const faculdade = confirm("Você está cursando faculdade?")


// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// if(idade>=18){
//     console.log("Você é maior de idade")
// }

// if(ensinoMedio==true){
//     console.log("Você terminou o ensino médio.")
// }

// if(faculdade==true){
//     console.log("Que bom! Você está cursando faculdade")
// }

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>

const nome = prompt("Digite seu nome.")
const idade = Number(prompt(`${nome}, qual é a sua idade?`))

if(idade>=18){
    console.log("Lega! Você é maior de idade")
}else{
    console.log(`Eita ${nome}! Você ainda é \"de menor\".`)
}


const ensinoMedio = confirm("Você terminou o ensino médio?")

if(ensinoMedio==true){
    console.log(`Certo ${nome}. Tem que estudar certinho mesmo.`)
}else{
    console.log(`Pô ${nome}! Ai você me f0d3. Tem que terminar os estudos.`)
}


const faculdade = confirm(`E, ${nome}. Você está cursando faculdade?`)

if(faculdade==true){
    console.log("Que bom! fazer faculdade é importante hoje em dia.")
}else{
    console.log("Seria bom você cursar uma faculdade.")
}