var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log('Livro: ${this.titulo}, publicado em ${this.anoPublicacao}.');
    };
    return Livro;
}());
var livroFavorito = new Livro("O Senhor dos Anéis", 1954);
livroFavorito.exibirDetalhes();
