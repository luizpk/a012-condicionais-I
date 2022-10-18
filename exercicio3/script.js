// # Exercício 3

// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

const nome = prompt("Digite seu nome.")
const nacionalidade = prompt(`Digite aqui sua nacionalidade, ${nome}.`).toLowerCase()

if(nacionalidade=="brasileira"){
    alert(`Opa, que legal ${nome}! Você é brasileiro.`)
} else if (nacionalidade=="argentina"){
    alert(`Opa, que legal ${nome}! Você é argentino.`)
} else if (nacionalidade=="uruguaia") {
    alert(`Opa, que legal ${nome}! Você é uruguaio.`)
}else if (nacionalidade=="chilena") {
    alert(`Opa, que legal ${nome}! Você é chileno.`)
}else if (nacionalidade=="colombiana") {
    alert(`Opa, que legal ${nome}! Você é colombiano.`)
} else {
    alert(`${nome}, sua nacionalidade não foi encontrada.`)
}



