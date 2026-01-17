// Em JavaScript não retorna erro algum, somente em execução
const user = {
    name: "João",
    age: 30
}

// Sem tipagem, sem segurança
console.log(
    user.email
); // undefined (por que ele não existe, e isso é somente percebido durante o runtime {tempo de execução do usuário/aplicativo}, 
// enquanto no TypeScript já aponta o erro em tempo de compilação)

// Em TypeScript, com tipagem e segurança
interface User {
    name: string;
    age: number;
}

const usuario: User = {
    name: 'João',
    age: 30
};

user.email; // Erro em tempo de compilação: Property 'email' does not exist on type 'User'.