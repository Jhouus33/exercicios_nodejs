// ## Importe a biblioteca ##
let rs = require('readline-sync')

// ## Faça o código ##
let diaNascimento = rs.questionInt("Quer descobrir qual seu signo? Digite o dia do seu aniversário; ")

let mesNascimento = rs.questionInt("Quer descobrir qual seu signo? Digite o mês do seu aniversário; ")

if (mesNascimento === 3 && (diaNascimento >= 21 && diaNascimento <=31) || mesNascimento === 4 && (diaNascimento >= 1 && diaNascimento <=19)) {
    console.log("Seu signo é Áries");
}
else if (mesNascimento === 4 && (diaNascimento >= 20 && diaNascimento <=30) || mesNascimento === 5 && (diaNascimento >= 1 && diaNascimento <=20)) {
        console.log("Seu signo é Touro");
}

else if (mesNascimento === 5 && (diaNascimento >= 21 && diaNascimento <=31) || mesNascimento === 5 && (diaNascimento >= 1 && diaNascimento <=21)) {
    console.log("Seu signo é Gêmeos");
}

else if (mesNascimento === 6 && (diaNascimento >= 22 && diaNascimento <=30) || mesNascimento === 7 && (diaNascimento >= 1 && diaNascimento <=22)) {
    console.log("Seu signo é Câncer");
}
else if (mesNascimento === 7 && (diaNascimento >= 23 && diaNascimento <=31) || mesNascimento === 8 && (diaNascimento >= 1 && diaNascimento <=22)) {
    console.log("Seu signo é Leão");
}
else if (mesNascimento === 8 && (diaNascimento >= 23 && diaNascimento <=31) || mesNascimento === 9 && (diaNascimento >= 1 && diaNascimento <=22)) {
    console.log("Seu signo é Virgem");
}
else if (mesNascimento === 9 && (diaNascimento >= 23 && diaNascimento <=30) || mesNascimento === 10 && (diaNascimento >= 1 && diaNascimento <=22)) {
    console.log("Seu signo é Libra");
}
else if (mesNascimento === 10 && (diaNascimento >= 23 && diaNascimento <=31) || mesNascimento === 11 && (diaNascimento >= 1 && diaNascimento <=22)) {
    console.log("Seu signo é Escorpião");
}
else if (mesNascimento === 11 && (diaNascimento >= 23 && diaNascimento <=30) || mesNascimento === 11 && (diaNascimento >= 1 && diaNascimento <=21)) {
    console.log("Seu signo é Sagitário");
}
else if (mesNascimento === 12 && (diaNascimento >= 22 && diaNascimento <=31) || mesNascimento === 1 && (diaNascimento >= 1 && diaNascimento <=19)) {
    console.log("Seu signo é Capricórnio");
}
else if (mesNascimento === 1 && (diaNascimento >= 20 && diaNascimento <=31) || mesNascimento === 2 && (diaNascimento >= 1 && diaNascimento <=18)) {
    console.log("Seu signo é Áquario");
}
else if (mesNascimento === 2 && (diaNascimento >= 19 && diaNascimento <=29) || mesNascimento === 3 && (diaNascimento >= 1 && diaNascimento <=20)) {
    console.log("Seu signo é Peixes");
}
else {
    console.log("Você não digitou uma data válida");
}
