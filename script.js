// 1 - Crie um objeto que receba ao menos três propriedades sobre você.
// 2 - Adicione uma nova propriedade sem alterar seu objeto inicial.
// 3 - Remova uma propriedade desse objeto.
// 4 - Mostre no console todas as propriedades desse objeto.
// 5 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// 5.1 - Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// 5.2 - Na propriedade amigos, adicione ao menos 4 itens.
// 6 - Mostre no console o nome de um amigo de cada lista


console.log("==========1==================");
// 1 - Crie um objeto que receba ao menos três propriedades sobre você.

 let eu = {
    nome: "Mariana",
    idade: 19,
    trabalha: true,
 }
console.log(eu)

 console.log("==========2==================");
// 2 - Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.faculdade = true;
console.log(eu);


console.log("==========3==================");
// 3 - Remova uma propriedade desse objeto.
delete eu.idade;
console.log(eu)


console.log("==========4==================");
// 4 - Mostre no console todas as propriedades desse objeto.
console.log(eu);


console.log("==========5==================");
// 5 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// 5.1 - Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// 5.2 - Na propriedade amigos, adicione ao menos 4 itens.

 const cadastro = [
     {
        nome: "Vó",
        idade: 68,
        telefone: 912345678,
        amigos: ["Mariana", "Josete", "Elaine", "Adraina"]
     }, 
    {
        nome: "Mãe",
        idade: 47,
        telefone: 912345678,
        amigos: ["Vivi", "Rose", "Juliana", "Marcelo"]
    }, 
   {
        nome: "Pai",
        idade: 50,
        telefone: 912345678,
        amigos: ["Marcio", "Wagner", "Mariana", "Carlos Eduardo"]
  }, 
   {
        nome: "Irmão",
        idade: 14,
        telefone: 912345678,
        amigos: ["Guilherme", "Ricardo", "Micael", "kauaw"]
  }, 
{
        nome: "Cachorro",
        idade: 56.5,
        telefone: 912345678,
        amigos: ["Gaia", "Spyke", "Messi", "Perseus"]
   },
  {
        nome: "Coelho",
        idade: 22,
        telefone: 912345678,
        amigos: ["Jojo", "Jaqueline", "Junior", "Julio Cesar"]
  }
 ];
console.log(cadastro)


console.log("==========6==================");
// 6 - Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[3].amigos[2]);
console.log(cadastro[4].amigos[3]);
console.log(cadastro[5].amigos[3]);
