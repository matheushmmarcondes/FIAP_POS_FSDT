// TypeScript = JavaScript + Types
const greeting: string = "Hello TypeScript!";

function add(a: number, b: number): number {
    return a + b;
}

// Erro em tempo de compilação!
add("5", 10); // ✕ Type `string` is not assignable to 'number'

// Correto
add(5, 10); // ✓ Result: 15