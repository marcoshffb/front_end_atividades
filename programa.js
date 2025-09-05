//Obtendo dados
let totalAulaSemestre = parseInt(prompt("Informe o total de aulas do semestre:"));
let totalFalta = parseInt(prompt("Informe o total de faltas do aluno:"));
let nota1 = parseFloat(prompt("Informe a primeira nota:"));
let nota2 = parseFloat(prompt("Informe a segunda nota:"));

//Calculando o percentual de presença
let percentualPresencaAluno = ((totalFalta/totalAulaSemestre)/100).toFixed(2);

if (percentualPresencaAluno > 25) {
    console.log("O aluno foi reprovado por falta!")
} else {
    console.log("O aluno tem presença suficiente!")
};

//Calculando a média
let media = ((nota1+nota2)/2);

if (media >= 7) {
    console.log("Você está aprovado!");
} else if (media < 7 && media >= 5) {
    console.log("RECUPERAÇÃO!");
    let recuperacao = parseFloat(prompt("Informe a nota da recuperação:"));
    if (((recuperacao+media)/2) >= 5) {
        console.log("Você foi aprovado na recuperação!")
    } else {
        console.log("Se lascou de verdade!")
    }
} else {
    console.log("Nota insuficiente!");
};

console.log(totalAulaSemestre);
console.log(totalFalta);
console.log(percentualPresencaAluno);