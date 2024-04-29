const prompt = require('prompt-sync')();

/* Questão 1 */
let celsius = prompt ("digite a temperatura em celsius: ");
let Fahrenheit  = parseInt(celsius) * 9/5 + 32;
console.log(Fahrenheit);

/* Questão 2 */
let eleitores = parseInt(prompt("digite o numero de eleitores:"));
let branco = parseInt(prompt("digite o numero de votos brancos:"));
let nulo = parseInt(prompt("digite o numero de votos nulos:"));
let valido = parseInt(prompt("digite o numero de votos validos:"));

console.log((branco / eleitores)*100);
console.log((nulo / eleitores)*100);
console.log((valido/ eleitores)*100);

/* Questão 3*/
// Leitura dos quatro números inteiros
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));

// Operações especificadas
num1 += 25; // Soma 25 ao primeiro inteiro
num2 *= 3; // Triplica o valor do segundo inteiro
num3 = num3 * 0.12; // Modifica o valor do terceiro inteiro para 12% do valor original

// Armazena a soma dos valores originais dos primeiros três inteiros no quarto inteiro
let num4 = num1 + num2 + num3;

// Exibição dos resultados
console.log("Resultado das operações:");
console.log("Primeiro inteiro + 25:", num1);
console.log("Segundo inteiro triplicado:", num2);
console.log("Terceiro inteiro modificado para 12%:", num3);
console.log("Soma dos valores originais dos primeiros três inteiros no quarto inteiro:", num4);

/* Questão 4 e 5*/
// Leitura das notas das provas
let prova1 = parseInt(prompt("Digite a nota da primeira prova: "));
let prova2 = parseInt(prompt("Digite a nota da segunda prova: "));

// Cálculo da média
let media = (prova1 + prova2) / 2;

// Verificação da média para aprovação
if (media > 6) {
    console.log("PARABÉNS! Você foi aprovado");
} else {
    console.log("Você foi REPROVADO! Estude mais");
}

/*Questão 6*/
// Leitura das notas das provas
let a = parseInt(prompt("Digite o valor de lado A: "));
let b = parseInt(prompt("Digite o valor de lado B: "));
let c = parseInt(prompt("Digite o valor de lado C: "));

// Verificação da média para aprovação
if ((a < b + c) && (b < a + c) && (c < a + b)) {
    console.log("triângulo");
    // Verificação do tipo de triângulo
    if (a === b && b === c) {
        console.log("equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("isósceles");
    } else {
        console.log("escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}


/*Questão 7*/

// Leitura das notas das provas
let qtd = parseInt(prompt("Digite a quantidade de maças compradas: "));

// Verificação da média para aprovação
if (qtd >= 12) {
    total = 0.25*qtd
    console.log("O valor total da compra é:",total);
    } 
else {
    total = 0.3*qtd
    console.log("O valor total da compra é:",total);
    }

/*Questão 8*/

// Leitura dos dois valores
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));

// Verifica se os valores são diferentes
if (valor1 === valor2) {
    console.log("Os valores são iguais. Por favor, insira valores diferentes.");
} else {
    // Ordenação dos valores sem usar Math.min e Math.max
    let menor, maior;

    if (valor1 < valor2) {
        menor = valor1;
        maior = valor2;
    } else {
        menor = valor2;
        maior = valor1;
    }

    // Exibição dos valores em ordem crescente
    console.log("Os valores em ordem crescente são:", menor, ",", maior);
}

/*Questão 9*/

let num = parseInt(prompt("Digite um número: "));

// Verificação da média para aprovação
if (num === 1) {
    console.log("Sul");
    }

else if (num === 2) {
    console.log("Norte");
    }

else if (num === 3) {
        console.log("Leste");
    }

else if (num === 4) {
    console.log("Oeste");
}

else if ((num === 5)||(num===6)) {
    console.log("Nordeste");
}

else if ((num === 7)||(num===8)||(num===9)) {
    console.log("Sudeste");
}

else if ((num >= 10) && (num < 20)) {
    console.log("Centro-Oeste");
}

else if ((num >= 25) && (num < 50)) {
    console.log("Nordeste");
}

else {
    console.log("Fora dos Intervalos - Produtos Importados");
}

/*Questão 10*/

// Leitura do número inteiro
let numero = parseInt(prompt("Digite um número inteiro: "));

// Escrever o número na tela 10 vezes
for (let i = 0; i < 10; i++) {
    console.log(numero);
}


/*Questão 11*/

let continuar = true;

while (continuar) {
    // Leitura do valor inteiro
    let valor = parseInt(prompt("Digite um valor inteiro (digite 0 ou um número negativo para encerrar): "));

    // Verifica se o valor é nulo ou negativo para encerrar o programa
    if (valor <= 0) {
        console.log("Programa encerrado.");
        continuar = false; // Define a variável de controle como falsa para sair do loop
    } else {
        // Verifica se o valor é par ou ímpar
        if (valor % 2 === 0) {
            console.log(valor + " é um número PAR.");
        } else {
            console.log(valor + " é um número ÍMPAR.");
        }
    }
}

/*Questão 12*/

for (let numero = 1000; numero <= 1999; numero++) {
    if (numero % 11 === 5) {
        console.log(numero);
    }
}

/*Questão 13*/

// Leitura dos 5 valores
for (let i = 0; i < 5; i++) {
    let valorN = parseInt(prompt("Digite um valor para N: "));

    // Cálculo e exibição da tabuada de 1 até N
    console.log("Tabuada de " + valorN + ":");
    for (let j = 1; j <= valorN; j++) {
        console.log(j + " x " + valorN + " = " + (j * valorN));
    }
    console.log(); // Adiciona uma linha em branco para separar as tabuadas
}

/*Questão 14*/

let soma = 0;
let cont = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));
    if (numero === 0) {
        break; // Encerra o loop quando o usuário digita 0
    }

    soma += numero; // Soma dos números inseridos
    cont++; // Contagem dos números inseridos
}

if (contador !== 0) {
    let media = soma / cont;
    console.log("A média aritmética dos números é:", media.toFixed(2));
} else {
    console.log("Nenhum número foi inserido para calcular a média.");
}

/*Questão 15*/

let somaNotas = 0;
let somaPesos = 0;

while (true) {
    let nota = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));
    if (nota === 0) {
        break; // Encerra o loop quando o usuário digita 0
    }

    let peso = parseFloat(prompt("Digite o peso correspondente à nota: "));

    somaNotas += nota * peso; // Soma das notas ponderadas
    somaPesos += peso; // Soma dos pesos
}

if (somaPesos !== 0) {
    let mediaPonderada = somaNotas / somaPesos;
    console.log("A média ponderada dos números é:", mediaPonderada.toFixed(2));
} else {
    console.log("Não foram inseridos valores para calcular a média ponderada.");
}

/*Questão 16*/

function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let contador = 0;
let numeroAtual = 101; // Inicia a busca a partir do primeiro número primo maior que 100

while (contador < 50) {
    if (isPrimo(numeroAtual)) {
        console.log(numeroAtual);
        contador++;
    }
    numeroAtual++;
}


