var idade;
idade = 30; // Valor atribuido é do tipo number e seu tipo é explicitamente declarado anteriormente com a linha acima.
var nome = "João"; // TS infere que o 'nome' é do tipo String e define assim o tipo da variável como String.
var idade_2 = 30; //Exenplo com número inteiro.
var altura = 1.75; // Exemplo com ponto flutuante.
var nome_2 = "Thamiris";
var mensagem = "Olá, Thamiris!";
var ativo = true;
var isAdmin = false;
var x = 5;
x = 10; // Isso é válido
// x = "abc"; // Isso geraria um erro, pois "abc" não é um número
var numeros = [1, 2, 3, 4, "João"];
var nomes = ["Maria", "João", "Samuel"];
var primeiroNumero = numeros[0]; // Obtém o primeiro número (1)
var segundoNome = nomes[1]; // Obtém o segundo nome ("João")
// Lista de Métodos utilizados em um Array
// Pop(): Remove o último elemento de um array e retorna esse elemento.
// Push(): adiciona um ou mais elementos ao final de um array e retorna o tamanho desse array.
// Shift(): remove o primeiro elemento de um array e retorna esse elemento.
// Unshift(): adiciona um ou mais elementos no início de um array e retorna o tamanho deste array.
// reduce(): executa uma função reducer (forncida por mim) para cada elemento do array, resultando num único valor de retorno.
// reverse(): inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
console.log(idade);
console.log(nome);
