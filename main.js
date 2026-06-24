function Funcionario(nome) {
    this.nome = nome;

    this.dizOi = function () {
        return `Olá, meu nome é ${this.nome}`;
    };
}

function Desenvolvedor(nome, salario, linguagem) {
    this.linguagem = linguagem;

    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    };

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    };

    this.coding = function () {
        return `${this.nome} está desenvolvendo em ${this.linguagem} e recebe o salário de ${this.getSalario()}`;
    };

    Funcionario.call(this, nome);
}

function Designer(nome, salario, software) {
    this.software = software;

    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    };

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    };

    this.crafting = function() {
        return `${this.nome} está criando telas pelo ${this.software} e recebe o salário de ${this.getSalario()}`;
    }

    Funcionario.call(this, nome);
}

const dev1 = new Desenvolvedor("Lucas", 5000, "JavaScript");
const dev2 = new Desenvolvedor("Marina", 7000, "Python");
const dev3 = new Designer("Ana", 4000, "Figma");

console.log(dev1.dizOi());
console.log(dev1.coding());

console.log(dev2.dizOi());
console.log(dev2.coding());

console.log(dev3.dizOi());
console.log(dev3.crafting());