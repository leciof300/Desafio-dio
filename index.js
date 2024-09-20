// Importa o módulo readline-sync
const readline = require('readline-sync');

// Solicita o nome e a quantidade de XP do herói
let nome = readline.question("Digite o nome do herói: ");
let xp = parseInt(readline.question("Digite a quantidade de experiência (XP) do herói: "));

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para classificar o herói com base no XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
