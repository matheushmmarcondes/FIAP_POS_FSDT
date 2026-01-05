// Interfaces VS. Types
// Interfaces

interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin
    extends User {
    role: string;
    }


// Define fomra de Objetos
// Suporta extends
// Declaration Merging
// Melhor para APIs

// | Type Alias | 

type ID = 
    string | number ;

type Status = 
"active" | "inactive";

type config = {
    timeout: number;
    retries: number;
}

// Unions e Intersections
// Tipos primitivos
// Mapeamento de tipos
// Mais flexível

// Regrasw de ouro: 
// 1)  use interface para objetos e classes. Melhor para contratos públicos e estruturas de dados
// 2) Use type para tudo mais: union, intersections, primitivos e mapeamentos de tipos