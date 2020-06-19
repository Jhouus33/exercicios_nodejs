// ## Importe a biblioteca ##
let rs = require('readline-sync')
// ## Faça o código ##
let ladoQuadrado = rs.questionFloat('Olá, eu posso calcular a área de um quadrado Duvida? Imagine um quadrado e digita o tamanho de um dos lados dele: ')

let resultadoArea =  ladoQuadrado *ladoQuadrado
console.log("A área do seu quadrado em m² é " + resultadoArea)