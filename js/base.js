const nome = "Fábio";
let nome2 = "";
let pessoaDefault = {
  nome: "Fábio",
  idade: "21",
  trabalho: "Trabalhador",
};

let nomes = ["Fábio", "Giovanna", "André"];
let pessoas = [
  {
    nome: "Fábio",
    idade: "18",
    trabalho: "Trabalhador",
  },
  {
    nome: "Giovanna",
    idade: "32",
    trabalho: "Arquiteta",
  },
  {
    nome: "André",
    idade: "21",
    trabalho: "Vendedor",
  },
];

function alterarnome() {
  nome2 = "Henrique";
  console.log("Valor alterado:");
  console.log(nome2);
}

function recebeEalteranome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

function imprimirPessoas() {
  console.log("---IMPRIMIR PESSOAS---");
  pessoas.forEach((item) => {
    console.log("Nome");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);
  });
}

imprimirPessoas();

adicionarPessoa({
  nome: "Pedro",
  idade: "30",
  trabalho: "Autonomo",
});

imprimirPessoas();
