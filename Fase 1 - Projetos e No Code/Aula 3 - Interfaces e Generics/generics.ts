function primeiroElemento<T>(arr: T[]): T {
    return arr[0];
}

let numeros = primeiroElemento([1, 2, 3]);
let palavras = primeiroElemento(['Olá', 'Mundo']);

console.log(numeros);
console.log(palavras)


interface TemNome {
    nome: string;
}

class Pessoa2 implements TemNome {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class CaixaNome<T extends TemNome>{
    conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }
}

let pessoa4 = new Pessoa2("Matheus");
let caixa = new CaixaNome (pessoa4)

console.log(caixa.conteudo.nome);