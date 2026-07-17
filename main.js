const alunos = [
    { nome: 'Felipe', nota: 8.5 },
    { nome: 'Julia', nota: 4.0 },
    { nome: 'Bianca', nota: 7.2 },
    { nome: 'Caio', nota: 5.9 },
    { nome: 'Lucas', nota: 9.1 },
    { nome: 'Amanda', nota: 3.5 },
    { nome: 'Rodolfo', nota: 6.0 },
    { nome: 'Bruno Guimarães', nota: 2.8 },
];

const filtrarAprovados = aluno => aluno.nota >= 6

const aprovados = alunos.filter(filtrarAprovados);

aprovados.map(({nome, nota}) => console.log(`${nome}: ${nota}`));
