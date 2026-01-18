var MeuCarro = /** @class */ (function () {
    function MeuCarro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    MeuCarro.prototype.ligar = function () {
        console.log("Ligando ".concat(this.modelo));
    };
    return MeuCarro;
}());
var carrasso = new MeuCarro("Honda", "City Sport GO", 2024);
carrasso.ligar();
function caixaDupla(item1, item2) {
    return [item1, item2];
}
var dupla = caixaDupla(42, "Resposta");
console.log(dupla);
