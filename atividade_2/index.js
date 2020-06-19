// ## Importe a biblioteca ##
let rs = require('readline-sync')

// ## Faça o código ##
let mascara = rs.question("Você está usando máscara quando precisa sair de casa?")

let maos = rs.question("Você está lavando as mãos frequentemente?")

if (mascara && maos == "sim") {
    console.log("Você está de parabéns, você é um exemplo para nossa sociedade ;D")
}
else {
    console.log("=================================")
    console.log("Como assim? :O qual seu problema?")
    console.log("=================================")
}