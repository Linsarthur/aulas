let produtos = [
  { id: 1, nome: "Laptop", preco: "4000.00", categoria: "tecnologia" },
  { id: 2, nome: "Termômetro", preco: "50.00", categoria: "saude" },
  { id: 3, nome: "Pincel de Pintura", preco: "20.00", categoria: "arte" },
  {
    id: 4,
    nome: "Livro de Receitas",
    preco: "35.00",
    categoria: "gastronomia",
  },
  { id: 5, nome: "Bola de Futebol", preco: "60.00", categoria: "esporte" },
];

const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const categoria = document.getElementById("categoria");

function gerarId() {
  const ultimoIndice = produtos.length - 1;
  const ultimoId = produtos[ultimoIndice].id;

  return ultimoId + 1;
}

function cadastrarProduto() {
  const produto = {
    id: gerarId(),
    nome: nome.value,
    preco: preco.value,
    categoria: categoria.value,
  };

  produtos.push(produto);
  adicionarProdutoNaLista(produto);
}

const listaProdutos = document.getElementById("lista-produtos");

function adicionarProdutoNaLista(produto) {
  listaProdutos.innerHTML += `
        <tr>
          <td>${produto.nome}</td>
          <td>${produto.preco}</td>
          <td>${produto.categoria}</td>
          <td>
            <button onclick="deletarProduto(${produto.id}">Remover</button>
          </td>
        </tr>
    `;
}

function listarProdutos() {
  produtos.forEach(adicionarProdutoNaLista);
}

listarProdutos();

function deletarProduto(id) {
   const produtoDeletado = produtos.findIndex((produto) => {
        if(produto.id === id) {
            produtos.splice(produtoDeletado, 1)
        }
        listaProdutos()
    })
}
console.log(produtos);
listaProdutos()