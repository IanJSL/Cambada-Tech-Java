// npm install readline-sync
const lerLinha = require("readline-sync");

//Banco de Dados
let usuarioCorreto = "ian";
let senhaCorreta = "1234";
let produtos = ["teclado", "mouse", "monitor"];

console.log("Digite o usuario: ");
let usuarioDigitado = lerLinha.question();
console.log("Digite a senha: ");
let senhaDigitado = lerLinha.question();

if (usuarioDigitado === usuarioCorreto && senhaDigitado === senhaCorreta) {
  console.log("Acesso Liberado!");

  console.log("---- MENU ----");
  console.log("1- Listar produtos");
  console.log("2- Cadastrar novo produto");
  console.log("3- Atualizar produto cadastrado");
  console.log("4- Excluir produto");
  console.log("0- Sair");
  console.log("Digite a opção escolhida: ");
  let opcao = lerLinha.question();
  //-----------------------LISTA DE PRODUTOS-----------------------------------------------------------------------------
  while (opcao != "0") {
    if (opcao === "1") {
      console.log("Lista de Produtos");
      console.log(produtos);
      //-----------------------CADASTRAR PRODUTOS-----------------------------------------------------------------------------
    } else if (opcao === "2") {
      console.log("Cadastrar novo produto");
      let novoProduto = lerLinha.question().toLocaleLowerCase();
      produtos.push(novoProduto);
      console.log(produtos);
      console.log("Produto adicionado!");
      //-----------------------ATUALIZAR PRODUTOS-----------------------------------------------------------------------------
    } else if (opcao === "3") {
      console.log(produtos);
      console.log("Qual produto deseja atualizar? ");
      let produtoAtualizar = lerLinha.question().toLowerCase();
      if (produtos.includes(produtoAtualizar)) {
        console.log("Digite o nome do novo produto: ");
        let novoNome = lerLinha.question().toLowerCase();
        let indice = produtos.indexOf(produtoAtualizar);
        produtos[indice] = novoNome;
        console.log(produtos);
        console.log("Produto Atualizado com Sucesso!");
      } else {
        console.log("Produto não encontrado!");
      }
      //-----------------------EXCLUIR PRODUTOS-----------------------------------------------------------------------------
    } else if (opcao === "4") {
      console.log(produtos);
      console.log("Qual produto deseja excluir? ");
      let removerProduto = lerLinha.question().toLowerCase();
      if (produtos.includes(removerProduto)) {
        let indiceExcluir = produtos.indexOf(removerProduto);
        produtos.splice(indiceExcluir, 1);
        console.log(produtos);
        console.log("Produto removido com sucesso!");
      } else {
        console.log("Produto não Encontrado! ");
      }
    } else {
      console.log("Opção não encontrada!");
    }
    console.log("Digite a opção escolhida: ");
    opcao = lerLinha.question();
  }
} else {
  console.log("Acesso Negado!");
}
