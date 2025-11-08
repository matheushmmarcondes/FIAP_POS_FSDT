class animal {
    private especie: string; // Propriedade privada desta classe.

    constructor(especie: string){
        this.especie = especie;
    }


    getEspecie(): string{
        return this.especie // Método público que expoê o que antes era privado como a especie (propriedade) do animal descrito acima. Mantendo assim a propriedade privada e mantendo assim a sua segurança e imutabilidade.
    }

    fazerSom(){
        console.log("Faz Som de Animal")
    }
}

class cachorro extends animal {
    fazerSom() {
        console.log("O cachorro late")
    }
}

class gato extends animal {
    fazerSom() {
        console.log("O Gato mia")
    }
}

const meuAnimal: animal = new cachorro();
meuAnimal.fazerSom(); //Me retorna o console.log da classe cachorro.

const meuOutroAnimal: animal = new gato ();
meuOutroAnimal.fazerSom(); //Me retorna o console.log da classe gato.