// Quando usar

// Caso 1: Estrutras de dados
interface User{
    name: string;
    age: number;
    email: string;
}

interface Admin
    extends User {
    role: string;
    }

// Caso 2: Tipos Complexos
type ID =
    string | number;

type tuple = 
    [string, number];

type Callback = 
    (data: any) => void;

// Caso 3: APIs Públicas
interface Database{
    connect(): Promise<void>;
    query(sql: string):
    Promise<any>;
}