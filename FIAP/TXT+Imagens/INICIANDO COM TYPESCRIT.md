| INICIANDO COM TYPESCRIT |



1\) Fundamentos Sólidos

2\) Tipagem Essencial

3\) Flexibilidade e Segurança

4\) Recursos de Especialista

5\) Ecossistema e Boas Práticas

6\) Conclusão



Diferença bruta entre TypeScript e JavaScript:

1\) Diferença Crítica: TypeScript detecta vulnerabilidades e erros durante o tempo de compilação do código, enquanto o JavaScript somente em tempo de execução do próprio app.

2\) O tal do arquivo mágico: tsconfig.json



**target**

Ex: "ES2022", "ES2020"

Define a versão de JavaScript de saída



**module**

Ex: "ESNext", "CommonJS"

Define o sistema de módulos (imports/exports)



**strict**

true/false

Ativa todas as verificações estritas de tipo



**moduleResolution**

Ex: "Node", "NodeNext"

Como o TS resolve os imports (Node.js style)



**paths**

Ex: "@/\*": \[~~src/\*]

Configurando aliases para imports limpos

