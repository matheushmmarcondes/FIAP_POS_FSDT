class Animal {
    private especie: string;

    constructor(especie: string){
        this.especie = especie;
    }

    getEspecie(): string {
        return this.especie;
    }


    fazerSom() {
        console.log ("O animal faz um som.");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("O cachorro late.");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("O gato mia")
    }
}


console.log ("Esta é a minha gata chamada Nira, ela é da espécie: ");
let nira = new Gato("Siames");
console.log(nira.getEspecie());
nira.fazerSom();

console.log ("Este é o cachorro do meu primo Lucas: Bob, ele é da espécie:");
let bob = new Cachorro("Puddel");
console.log (bob.getEspecie());
bob.fazerSom();