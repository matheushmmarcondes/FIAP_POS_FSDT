// Função Genérica

function getProp<T, K extends keyprof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

// Uso com inferência
const user = { name: "Alice", age: 30};
const name = getProp(user, "name");
// name: string ✓


// Interface Genérica
interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string; // (?) indica que é opcional
}

// Uso específico
type UserResponse = 
    ApiResponse<{ id:NumberConstructor; name: string}>;

// Reutilizável para qualquer tipo