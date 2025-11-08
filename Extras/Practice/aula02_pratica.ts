class pessoa {
    nome: string;
    idade: number;

    constructor (nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(){
        console.log(`Olá! Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const aluno = new pessoa ('Matheus', 30);
aluno.saudacao()