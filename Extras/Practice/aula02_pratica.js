var pessoa = /** @class */ (function () {
    function pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1! Meu nome \u00E9 ".concat(this.nome, " e minha idade \u00E9 ").concat(this.idade));
    };
    return pessoa;
}());
var aluno = new pessoa('Matheus', 30);
aluno.saudacao();
