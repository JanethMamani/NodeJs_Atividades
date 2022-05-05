// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const input = gets();
let a = input;

//TODO: Complete os espaços em branco com uma possível solução para o desafio
let n = Array(10);
for (let i=0; i<10; i++) {
  print(`N[${i}] = ${a}`);
  a = parseInt(a) * 2;
}
