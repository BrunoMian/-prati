/* Questão 1 */

function calcularTempoPerdido(cigarrosPorDia, anosFumando) {
    const minutosPerdidos = cigarrosPorDia * 10 * 365 * anosFumando;
    const diasPerdidos = minutosPerdidos / (24 * 60);
    return diasPerdidos;
}

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia?"), 10);
const anosFumando = parseInt(prompt("Há quantos anos você fuma?"), 10);
const diasPerdidos = calcularTempoPerdido(cigarrosPorDia, anosFumando);
alert(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida devido ao fumo.`);

/* Questão 2 */

const velocidade = parseFloat(prompt("Qual a velocidade do carro em Km/h?"));
const limiteVelocidade = 80;

if (velocidade > limiteVelocidade) {
    const multa = (velocidade - limiteVelocidade) * 5;
    alert(`Você foi multado! O valor da multa é de R$ ${multa.toFixed(2)}.`);
} else {
    alert("Você está dentro do limite de velocidade.");
}

/* Questão 3 */

const distancia = parseFloat(prompt("Qual a distância que você deseja percorrer em Km?"));

let preco;
if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

alert(`O preço da passagem é de R$ ${preco.toFixed(2)}.`);

/* Questão 4 */

const a = parseFloat(prompt("Digite o comprimento do primeiro segmento de reta:"));
const b = parseFloat(prompt("Digite o comprimento do segundo segmento de reta:"));
const c = parseFloat(prompt("Digite o comprimento do terceiro segmento de reta:"));

if (a < b + c && b < a + c && c < a + b) {
    alert("Os segmentos podem formar um triângulo.");
} else {
    alert("Os segmentos não podem formar um triângulo.");
}

/* Questão 5 */

const opcoes = ["Pedra", "Papel", "Tesoura"];

const usuarioEscolha = prompt("Escolha Pedra, Papel ou Tesoura:").toLowerCase();
const computadorEscolha = opcoes[Math.floor(Math.random() * 3)].toLowerCase();

if (usuarioEscolha === computadorEscolha) {
    alert(`Empate! Ambos escolheram ${usuarioEscolha}.`);
} else if (
    (usuarioEscolha === "pedra" && computadorEscolha === "tesoura") ||
    (usuarioEscolha === "papel" && computadorEscolha === "pedra") ||
    (usuarioEscolha === "tesoura" && computadorEscolha === "papel")
) {
    alert(`Você venceu! Você escolheu ${usuarioEscolha} e o computador escolheu ${computadorEscolha}.`);
} else {
    alert(`Você perdeu! Você escolheu ${usuarioEscolha} e o computador escolheu ${computadorEscolha}.`);
}


/* Questão 6 */

const numeroSorteado = Math.floor(Math.random() * 5) + 1;
const palpite = parseInt(prompt("Tente adivinhar o número sorteado (entre 1 e 5):"), 10);

if (palpite === numeroSorteado) {
    alert("Parabéns! Você acertou o número sorteado.");
} else {
    alert(`Que pena! O número sorteado foi ${numeroSorteado}.`);
}


/* Questão 7 */

const tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo):").toLowerCase();
const diasAlugados = parseInt(prompt("Quantos dias de aluguel?"), 10);
const kmPercorridos = parseFloat(prompt("Quantos Km foram percorridos?"));

let precoTotal;

if (tipoCarro === "popular") {
    precoTotal = diasAlugados * 90;
    if (kmPercorridos <= 100) {
        precoTotal += kmPercorridos * 0.20;
    } else {
        precoTotal += 100 * 0.20 + (kmPercorridos - 100) * 0.10;
    }
} else if (tipoCarro === "luxo") {
    precoTotal = diasAlugados * 150;
    if (kmPercorridos <= 200) {
        precoTotal += kmPercorridos * 0.30;
    } else {
        precoTotal += 200 * 0.30 + (kmPercorridos - 200) * 0.25;
    }
} else {
    alert("Tipo de carro inválido.");
    precoTotal = 0;
}

alert(`O preço total a pagar é R$ ${precoTotal.toFixed(2)}.`);


/* Questão 8 */

const horasAtividade = parseFloat(prompt("Quantas horas de atividade física você teve no mês?"));

let pontos;
if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = 10 * 2 + (horasAtividade - 10) * 5;
} else {
    pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
}

const dinheiroGanho = pontos * 0.05;
alert(`Você ganhou ${pontos} pontos e R$ ${dinheiroGanho.toFixed(2)}.`);


/* Questão 9 */

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar;

do {
    const salario = parseFloat(prompt("Digite o salário do funcionário:"));
    const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();

    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    } else {
        alert("Sexo inválido.");
    }

    continuar = prompt("Deseja continuar? (S para sim, N para não):").toUpperCase();
} while (continuar === 'S');

alert(`Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}.\nTotal de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}.`);


/* Questão 10 */

let soma = 0;
let menor = null;
let totalValores = 0;
let totalPares = 0;
let continuar;

do {
    const valor = parseFloat(prompt("Digite um valor:"));
    soma += valor;
    totalValores++;

    if (menor === null || valor < menor) {
        menor = valor;
    }

    if (valor % 2 === 0) {
        totalPares++;
    }

    continuar = prompt("Deseja continuar? (S para sim, N para não):").toUpperCase();
} while (continuar === 'S');

const media = soma / totalValores;
alert(`Somatório: ${soma}\nMenor valor: ${menor}\nMédia: ${media.toFixed(2)}\nQuantidade de valores pares: ${totalPares}`);


/* Questão 11 */
const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA:"));
const razao = parseInt(prompt("Digite a razão da PA:"));
let pa = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    pa[i] = primeiroTermo + i * razao;
    soma += pa[i];
}

alert(`Os 10 primeiros termos da PA são: ${pa.join(', ')}\nA soma dos termos é: ${soma}`);


/* Questão 12 */

let fibonacci = [1, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

alert(`Os 10 primeiros elementos da sequência de Fibonacci são: ${fibonacci.join(', ')}`);


/* Questão 13 */

let fibonacci = [1, 1];

for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

alert(`Os primeiros 15 elementos da sequência de Fibonacci são: ${fibonacci.join(', ')}`);


/* Questão 14 */

let nomes = [];

for (let i = 0; i < 7; i++) {
    nomes[i] = prompt(`Digite o nome da pessoa ${i + 1}:`);
}

alert(`Os nomes em ordem inversa são: ${nomes.reverse().join(', ')}`);


/* Questão 15 */

let numeros = [];
let pares = [];
let posicoes = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt(`Digite o número ${i + 1}:`), 10);
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
        posicoes.push(i);
    }
}

alert(`Os números pares são: ${pares.join(', ')}\nNas posições: ${posicoes.join(', ')}`);


/* Questão 16 */

let vetor = [];

for (let i = 0; i < 20; i++) {
    vetor[i] = Math.floor(Math.random() * 100);
}

alert(`Os números gerados são: ${vetor.join(', ')}`);

vetor.sort((a, b) => a - b);

alert(`Os números ordenados são: ${vetor.join(', ')}`);


/* Questão 17 */

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes[i] = prompt(`Digite o nome da pessoa ${i + 1}:`);
    idades[i] = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`), 10);
}

let menores = nomes.filter((_, i) => idades[i] < 18);
let idadesMenores = idades.filter(idade => idade < 18);

alert(`Pessoas menores de idade:\n${menores.map((nome, i) => `${nome} (${idadesMenores[i]} anos)`).join('\n')}`);


/* Questão 18 */

let funcionario = {
    nome: prompt("Digite o nome do funcionário:"),
    cargo: prompt("Digite o cargo do funcionário:"),
    salario: parseFloat(prompt("Digite o salário do funcionário:"))
};

alert(`Funcionário:\nNome: ${funcionario.nome}\nCargo: ${funcionario.cargo}\nSalário: R$ ${funcionario.salario.toFixed(2)}`);


/* Questão 19 */

function validarHorario(horario) {
    const [hh, mm, ss] = horario.split(':').map(Number);
    return hh >= 0 && hh < 24 && mm >= 0 && mm < 60 && ss >= 0 && ss < 60;
}

let horarios = [];

for (let i = 0; i < 5; i++) {
    let horario;
    do {
        horario = prompt(`Digite o horário ${i + 1} no formato HH:MM:SS:`);
    } while (!validarHorario(horario));
    horarios.push(horario);
}

alert(`Os horários são:\n${horarios.join('\n')}`);


/* Questão 20 */

let funcionarios = [];
const DESCONTO_INSS = 0.12;

for (let i = 0; i < 80; i++) {
    let matricula = prompt(`Digite a matrícula do funcionário ${i + 1}:`);
    let nome = prompt(`Digite o nome do funcionário ${i + 1}:`);
    let salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}:`));

    let deducaoINSS = salarioBruto * DESCONTO_INSS;
    let salarioLiquido = salarioBruto - deducaoINSS;

    funcionarios.push({
        matricula,
        nome,
        salarioBruto,
        deducaoINSS,
        salarioLiquido
    });
}

funcionarios.forEach(func => {
    alert(`Matrícula: ${func.matricula}\nNome: ${func.nome}\nSalário bruto: R$ ${func.salarioBruto.toFixed(2)}\nDedução INSS: R$ ${func.deducaoINSS.toFixed(2)}\nSalário líquido: R$ ${func.salarioLiquido.toFixed(2)}`);
});


/* Questão 21 */

function pesoIdeal(altura, sexo) {
    if (sexo === 'M') {
        return (72.7 * altura - 58).toFixed(2);
    } else if (sexo === 'F') {
        return (62.1 * altura - 44.7).toFixed(2);
    } else {
        return "Sexo inválido";
    }
}

const altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));
const sexo = prompt("Digite o sexo da pessoa (M/F):").toUpperCase();

alert(`O peso ideal é: ${pesoIdeal(altura, sexo)} kg`);


/* Questão 22 */

function coletaDados() {
    let totalSalario = 0, totalFilhos = 0, numPessoas = 0;
    let maiorSalario = 0, salarioAte350 = 0;
    let continuar = true;

    while (continuar) {
        let salario = parseFloat(prompt("Digite o salário:"));
        let filhos = parseInt(prompt("Digite o número de filhos:"));

        totalSalario += salario;
        totalFilhos += filhos;
        numPessoas++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        if (salario <= 350) {
            salarioAte350++;
        }

        continuar = confirm("Deseja continuar?");
    }

    let mediaSalario = totalSalario / numPessoas;
    let mediaFilhos = totalFilhos / numPessoas;
    let percentualSalarioAte350 = (salarioAte350 / numPessoas) * 100;

    return {
        mediaSalario: mediaSalario.toFixed(2),
        mediaFilhos: mediaFilhos.toFixed(2),
        maiorSalario: maiorSalario.toFixed(2),
        percentualSalarioAte350: percentualSalarioAte350.toFixed(2)
    };
}

const resultado = coletaDados();
alert(`Média de salário: R$ ${resultado.mediaSalario}\nMédia de número de filhos: ${resultado.mediaFilhos}\nMaior salário: R$ ${resultado.maiorSalario}\nPercentual de pessoas com salário até R$ 350,00: ${resultado.percentualSalarioAte350}%`);


/* Questão 23 */

let matrizIdentidade = [];

for (let i = 0; i < 7; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < 7; j++) {
        matrizIdentidade[i][j] = (i === j) ? 1 : 0;
    }
}

console.log("Matriz Identidade 7x7:");
console.log(matrizIdentidade);


/* Questão 24 */

let matriz = [
    [1, -2, -3, 4, -5, 6, -7, 8],
    [-9, 10, -11, 12, -13, 14, -15, 16],
    [17, -18, 19, -20, 21, -22, 23, -24],
    [25, -26, 27, -28, 29, -30, 31, -32],
    [33, -34, 35, -36, 37, -38, 39, -40],
    [41, -42, 43, -44, 45, -46, 47, -48]
];
let vetorC = matriz.map(linha => linha.filter(elemento => elemento < 0).length);

console.log("Vetor C com contagem de negativos por linha:");
console.log(vetorC);


/* Questão 25 */

let matriz = [];
for (let i = 0; i < 15; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor para matriz[${i}][${j}]:`));
    }
}

let somaColunas = new Array(20).fill(0);
for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 15; i++) {
        somaColunas[j] += matriz[i][j];
    }
}

console.log("Soma de cada coluna:");
console.log(somaColunas);


/* Questão 26 */

let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
let B = [
    [15, 14, 13, 12, 11],
    [10, 9, 8, 7, 6],
    [5, 4, 3, 2, 1]
];

let P = [];

for (let i = 0; i < 3; i++) {
    P[i] = [];
    for (let j = 0; j < 5; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log("Matriz produto P:");
console.log(P);


/* Questão 27 */

let M = [];
for (let i = 0; i < 6; i++) {
    M[i] = [];
    for (let j = 0; j < 6; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]:`));
    }
}

let A = parseFloat(prompt("Digite o valor de A:"));
let V = [];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V.push(M[i][j] * A);
    }
}

console.log("Vetor V:");
console.log(V);


/* Questão 28 */

let M = [];
for (let i = 0; i < 10; i++) {
    M[i] = [];
    for (let j = 0; j < 10; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]:`));
    }
}

let somaAcima = 0, somaAbaixo = 0;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j > i) {
            somaAcima += M[i][j];
        } else if (j < i) {
            somaAbaixo += M[i][j];
        }
    }
}

console.log(`Soma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);


/* Questão 29 */

let M = [];
for (let i = 0; i < 5; i++) {
    M[i] = [];
    for (let j = 0; j < 5; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]:`));
    }
}

let somaLinha4 = 0, somaColuna2 = 0, somaDiagonalPrincipal = 0, somaTotal = 0;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        somaTotal += M[i][j];
        if (i === 4) somaLinha4 += M[i][j];
        if (j === 2) somaColuna2 += M[i][j];
        if (i === j) somaDiagonalPrincipal += M[i][j];
    }
}

console.log("Matriz M:");
console.table(M);
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos: ${somaTotal}`);


/* Questão 30 */

function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.floor(Math.random() * 10)); // Valores aleatórios entre 0 e 9
        }
        matriz.push(linha);
    }
    return matriz;
}

function calcularSomas(matriz) {
    let linhas = matriz.length;
    let colunas = matriz[0].length;
    let SL = new Array(linhas).fill(0);
    let SC = new Array(colunas).fill(0);

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            SL[i] += matriz[i][j];
            SC[j] += matriz[i][j];
        }
    }

    return { SL, SC };
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function imprimirVetores(SL, SC) {
    console.log('Soma das linhas (SL):', SL);
    console.log('Soma das colunas (SC):', SC);
}

// Criar e imprimir a matriz
let M = criarMatriz(5, 5);
console.log('Matriz M(5,5):');
imprimirMatriz(M);

// Calcular as somas e imprimir os vetores
let { SL, SC } = calcularSomas(M);
imprimirVetores(SL, SC);


/* Questão 31 */

let A = parseInt(prompt("Digite um número inteiro A:"));
let V = [];
let X = [];

for (let i = 0; i < 30; i++) {
    V[i] = [];
    for (let j = 0; j < 30; j++) {
        V[i][j] = parseInt(prompt(`Digite o valor para V[${i}][${j}]:`));
    }
}

let countA = 0;
for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] === A) {
            countA++;
        } else {
            X.push(V[i][j]);
        }
    }
}

console.log(`Quantidade de valores iguais a A: ${countA}`);
console.log("Matriz X:");
console.log(X);

/* Questão 32 */

let M = [];
for (let i = 0; i < 12; i++) {
    M[i] = [];
    for (let j = 0; j < 13; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]:`));
    }
}

let MModificada = M.map(linha => {
    let maiorEmModulo = Math.max(...linha.map(Math.abs));
    return linha.map(elemento => (elemento / maiorEmModulo).toFixed(2));
});

console.log("Matriz Lida:");
console.table(M);
console.log("Matriz Modificada:");
console.table(MModificada);


/* Questão 33 */

let M = [];
for (let i = 0; i < 3; i++) {
    M[i] = [];
    for (let j = 0; j < 3; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]:`));
    }
}

let somaDiagonalSecundaria = 0;
for (let i = 0; i < 3; i++) {
    somaDiagonalSecundaria += M[i][2 - i];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;

for (let i = 0; i < 3; i++) {
    M[i][i] *= mediaDiagonalSecundaria;
}

console.log("Matriz Modificada:");
console.table(M);


/* Questão 34 */

let M = [];
for (let i = 0; i < 50; i++) {
    M[i] = [];
    for (let j = 0; j < 50; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]:`));
    }
}

for (let i = 0; i < 50; i++) {
    let fator = M[i][i];
    for (let j = 0; j < 50; j++) {
        M[i][j] *= fator;
    }
}

console.log("Matriz após multiplicações:");
console.table(M);


/* Questão 35 */

let valores = [];
for (let i = 0; i < 30; i++) {
    valores.push(parseInt(prompt(`Digite o valor ${i + 1}:`)));
}

let pares = [];
let impares = [];

valores.forEach(valor => {
    if (valor % 2 === 0) {
        pares.push(valor);
        if (pares.length === 5) {
            console.log("Vetor de pares cheio:", pares);
            pares = [];
        }
    } else {
        impares.push(valor);
        if (impares.length === 5) {
            console.log("Vetor de ímpares cheio:", impares);
            impares = [];
        }
    }
});

if (pares.length > 0) console.log("Vetor de pares restante:", pares);
if (impares.length > 0) console.log("Vetor de ímpares restante:", impares);


/* Questão 36 */

let gabarito = [];
for (let i = 0; i < 13; i++) {
    gabarito.push(parseInt(prompt(`Digite o gabarito para a posição ${i + 1}:`)));
}

for (let i = 0; i < 100; i++) {
    let numeroCartao = parseInt(prompt(`Digite o número do cartão do apostador ${i + 1}:`));
    let respostas = [];
    for (let j = 0; j < 13; j++) {
        respostas.push(parseInt(prompt(`Digite a resposta para a posição ${j + 1}:`)));
    }

    let acertos = respostas.filter((resposta, index) => resposta === gabarito[index]).length;

    if (acertos === 13) {
        console.log(`Apostador ${numeroCartao}: Parabéns, tu foi o GANHADOR`);
    } else {
        console.log(`Apostador ${numeroCartao}: ${acertos} acertos`);
    }
}


/* Questão 37 */

let gabarito = [];
for (let i = 0; i < 20; i++) {
    gabarito.push(prompt(`Digite o gabarito para a posição ${i + 1}:`));
}

for (let i = 0; i < 50; i++) {
    let respostas = [];
    for (let j = 0; j < 20; j++) {
        respostas.push(prompt(`Digite a resposta do aluno ${i + 1} para a posição ${j + 1}:`));
    }

    let acertos = respostas.filter((resposta, index) => resposta === gabarito[index]).length;

    console.log(`Aluno ${i + 1}: ${acertos} acertos`);
    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}


/* Questão 38 */

let vetor = [];
for (let i = 0; i < 6; i++) {
    vetor.push(parseFloat(prompt(`Digite o valor para a posição ${i + 1}:`)));
}

let operacao = parseInt(prompt("Digite a operação desejada: 1- Soma, 2- Produto, 3- Média, 4- Ordenar, 5- Mostrar"));

switch (operacao) {
    case 1:
        let soma = vetor.reduce((acc, val) => acc + val, 0);
        console.log("Soma dos elementos:", soma);
        break;
    case 2:
        let produto = vetor.reduce((acc, val) => acc * val, 1);
        console.log("Produto dos elementos:", produto);
        break;
    case 3:
        let media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
        console.log("Média dos elementos:", media);
        break;
    case 4:
        let ordenado = [...vetor].sort((a, b) => a - b);
        console.log("Elementos em ordem crescente:", ordenado);
        break;
    case 5:
        console.log("Vetor:", vetor);
        break;
    default:
        console.log("Operação inválida");
}


/* Questão 39 */

let A = [];
for (let i = 0; i < 100; i++) {
    A.push(parseFloat(prompt(`Digite o valor para a posição ${i + 1}:`)));
}

let B = A.filter(valor => valor > 0);

console.log("Vetor compactado B:");
console.log(B);


/* Questão 40 */


let resultadoOficial = [];
for (let i = 0; i < 5; i++) {
    resultadoOficial.push(parseInt(prompt(`Digite o resultado oficial para a posição ${i + 1}:`)));
}

for (let i = 0; i < 50; i++) {
    let aposta = [];
    for (let j = 0; j < 5; j++) {
        aposta.push(parseInt(prompt(`Digite a aposta ${i + 1} para a posição ${j + 1}:`)));
    }

    let ganhador = aposta.every((num, index) => num === resultadoOficial[index]);

    if (ganhador) {
        console.log(`Aposta ${i + 1}: Ganhador`);
    } else {
        console.log(`Aposta ${i + 1}: Não ganhou`);
    }
}

/* Questão 41 */

let pessoa = {
    nome: 'João',
    idade: 30
};

console.log(pessoa.idade);

pessoa.email = 'joao@example.com';

console.log(pessoa);

/* Questão 42 */

let dados = {
    nome: 'Maria',
    idade: 25,
    hobbies: ['leitura', 'natação'],
    notas: [10, 9, 8],
    cidade: 'Rio de Janeiro'
};

function somenteArrays(obj) {
    let resultado = {};
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            resultado[key] = obj[key];
        }
    }
    return resultado;
}

console.log(somenteArrays(dados));


/* Questão 43 */

let obj1 = {
    a: 1,
    b: 2,
    c: 3
};

let obj2 = {
    b: 4,
    c: 5,
    d: 6
};

function combinarObjetos(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(combinarObjetos(obj1, obj2));


/* Questão 44 */

function contarStrings(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count++;
        }
    }
    return count;
}

let exemplo = {
    nome: 'Ana',
    idade: 28,
    cidade: 'São Paulo',
    profissao: 'Engenheira'
};

console.log(contarStrings(exemplo));


/* Questão 45 */

let strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function contarOcorrencias(arr) {
    let resultado = {};
    arr.forEach(str => {
        if (resultado[str]) {
            resultado[str]++;
        } else {
            resultado[str] = 1;
        }
    });
    return resultado;
}

console.log(contarOcorrencias(strings));


/* Questão 46 */

let vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Ana', valor: 250 }
];

function totalVendasPorVendedor(vendas) {
    let totalVendas = {};
    vendas.forEach(venda => {
        if (totalVendas[venda.vendedor]) {
            totalVendas[venda.vendedor] += venda.valor;
        } else {
            totalVendas[venda.vendedor] = venda.valor;
        }
    });
    return totalVendas;
}

console.log(totalVendasPorVendedor(vendas));


/* Questão 47 */

let objeto = {
    a: 1,
    b: 2,
    c: 3
};

function transformarObjeto(obj, func) {
    let novoObjeto = {};
    for (let key in obj) {
        novoObjeto[key] = func(obj[key]);
    }
    return novoObjeto;
}

function dobrar(valor) {
    return valor * 2;
}

console.log(transformarObjeto(objeto, dobrar));


/* Questão 48 */

let inventarioLojaA = {
    item1: 10,
    item2: 5,
    item3: 2
};

let inventarioLojaB = {
    item2: 3,
    item3: 5,
    item4: 8
};

function combinarInventarios(invA, invB) {
    let inventarioCombinado = {...invA};
    for (let item in invB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += invB[item];
        } else {
            inventarioCombinado[item] = invB[item];
        }
    }
    return inventarioCombinado;
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));


/* Questão 49 */

let transacoes = [
    { id: 1, valor: 100, data: '2023-01-01', categoria: 'alimentacao' },
    { id: 2, valor: 200, data: '2023-01-02', categoria: 'transporte' },
    { id: 3, valor: 150, data: '2023-01-03', categoria: 'alimentacao' },
    { id: 4, valor: 300, data: '2023-01-04', categoria: 'lazer' }
];

function categorizarTransacoes(transacoes) {
    let resultado = {};
    transacoes.forEach(transacao => {
        if (!resultado[transacao.categoria]) {
            resultado[transacao.categoria] = { transacoes: [], subtotal: 0 };
        }
        resultado[transacao.categoria].transacoes.push(transacao);
        resultado[transacao.categoria].subtotal += transacao.valor;
    });
    return resultado;
}

console.log(categorizarTransacoes(transacoes));


/* Questão 50 */

let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel(nome, cidade, quartosTotais) {
    hoteis.push({
        id: proximoIdHotel++,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis: quartosTotais
    });
    console.log("Hotel adicionado com sucesso!");
}

function buscarHoteisPorCidade(cidade) {
    return hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
}

function fazerReserva(idHotel, nomeCliente) {
    let hotel = hoteis.find(h => h.id === idHotel);
    if (hotel && hotel.quartosDisponiveis > 0) {
        reservas.push({
            idReserva: proximoIdReserva++,
            idHotel,
            nomeCliente
        });
        hotel.quartosDisponiveis--;
        console.log("Reserva feita com sucesso!");
    } else {
        console.log("Não há quartos disponíveis ou hotel não encontrado.");
    }
}

function cancelarReserva(idReserva) {
    let reserva = reservas.find(r => r.idReserva === idReserva);
    if (reserva) {
        let hotel = hoteis.find(h => h.id === reserva.idHotel);
        hotel.quartosDisponiveis++;
        reservas = reservas.filter(r => r.idReserva !== idReserva);
        console.log("Reserva cancelada com sucesso!");
    } else {
        console.log("Reserva não encontrada.");
    }
}

function listarReservas() {
    reservas.forEach(reserva => {
        let hotel = hoteis.find(h => h.id === reserva.idHotel);
        console.log(`Reserva ${reserva.idReserva}: Hotel ${hotel.nome} (${hotel.cidade}), Cliente: ${reserva.nomeCliente}`);
    });
}

// Exemplo de uso
adicionarHotel("Hotel A", "Rio de Janeiro", 10);
adicionarHotel("Hotel B", "São Paulo", 20);

console.log(buscarHoteisPorCidade("Rio de Janeiro"));

fazerReserva(1, "João");
fazerReserva(2, "Maria");

listarReservas();

cancelarReserva(1);

listarReservas();

