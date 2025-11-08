class animal {
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