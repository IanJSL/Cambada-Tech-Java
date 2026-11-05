// npm install readline-sync
const lerTexto = require("readline-sync");

//Banco de Dados
let usuarioCerto = "ian";
let senhaCerta = "12345";
let senhaAdmin = "54321";
let cardapio = [
  "brigadeiro",
  "cuscuz",
  "suco",
  "sandwich",
  "lasanha",
  "salada",
  "pave",
  "refrigerante",
  "agua",
  "cafe",
];

console.log("Digitar nome do usuário");
let usuarioInserido = lerTexto.question();
console.log("Digitar Senha");
let senhaInserida = lerTexto.question();

if (usuarioInserido === usuarioCerto && senhaInserida === senhaCerta) {
  console.log("Acesso liberado!");

  console.log("--- MENU ---");
  console.log("1- Cardápio");
  console.log("2- Cadastrar Novo Item");
  console.log("3- Atualizar Item Existente");
  console.log("4- Excluir Item");
  console.log("0- Sair");
  let opcao = lerTexto.question();
  //-----------------------CARDÁPIO--------------------------------------------------------------------
  while (opcao != "0") {
    if (opcao === "1") {
      console.log("Cardápio");
      console.log(cardapio);
      //-----------------------CADASTRAR NOVO ITEM--------------------------------------------------------------------
    } else if (opcao === "2") {
      console.log("Digite Senha do Admin:");
      let senhaUsada = lerTexto.question();
      if (senhaUsada === senhaAdmin) {
        console.log("Aceso Liberado!");
        console.log("Cadastrar novo Item");
        let novoItem = lerTexto.question().toLocaleLowerCase();
        cardapio.push(novoItem);
        console.log(cardapio);
        console.log("Novo item adicionado!");
      } else {
        console.log("Acesso Negado!");
      }

      //-----------------------ATUALIZAR ITEMS--------------------------------------------------------------------
    } else if (opcao === "3") {
      console.log("Digite Senha do Admin:");
      let senhaUsada = lerTexto.question();
      if (senhaUsada === senhaAdmin) {
        console.log(cardapio);
        console.log("Qual item deseja atualizar? ");
        let itemAtualizar = lerTexto.question().toLowerCase();
        if (cardapio.includes(itemAtualizar)) {
          console.log("Digite o nome do novo Item: ");
          let nomeNovo = lerTexto.question().toLowerCase();
          let indice = cardapio.indexOf(itemAtualizar);
          cardapio[indice] = nomeNovo;
          console.log(cardapio);
          console.log("Item Atualizado com Sucesso!");
        } else {
          console.log("Item não Encontrado!");
        }
      } else {
        console.log("Acesso Negado!");
      }
      //-----------------------REMOVER ITEMS--------------------------------------------------------------------
    } else if (opcao === "4") {
      console.log("Digite Senha do Admin:");
      let senhaUsada = lerTexto.question();
      if (senhaUsada === senhaAdmin) {
        console.log(cardapio);
        console.log("Qual item deseja excluir? ");
        let removerItem = lerTexto.question().toLowerCase();
        if (cardapio.includes(removerItem)) {
          let excluirIndice = cardapio.indexOf(removerItem);
          cardapio.splice(excluirIndice, 1);
          console.log(cardapio);
          console.log("Item removido com sucesso!");
        } else {
          console.log("Item não encontrado!");
        }
      } else {
        console.log("Acesso Negado!");
      }
    } else {
      console.log("Opção não Encontrada!");
    }
    console.log("Digite a opção escolhida: ");
    opcao = lerTexto.question();
  }
} else {
  console.log("Acesso Negado!");
}
