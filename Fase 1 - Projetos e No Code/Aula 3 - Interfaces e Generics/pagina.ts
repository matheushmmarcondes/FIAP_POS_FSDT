interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    ligar(): void;
}

class MeuCarro implements Carro {
    marca: string;
    modelo: string; 
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`Ligando ${this.modelo}`)
    }
}

let carrasso = new MeuCarro("Honda", "City Sport GO", 2024)
carrasso.ligar();



function caixaDupla<T, U>(item1: T, item2: U): [T, U] {
    return [item1, item2];
}

let dupla = caixaDupla<number, string>(42, "Resposta");
console.log(dupla);
