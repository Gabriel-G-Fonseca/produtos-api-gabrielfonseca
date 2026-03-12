let produtos = [];
let nextId = 1;

function listar(req, res) {
  return res.status(200).json(produtos);
}

function buscar(req, res) {
  const { id } = req.params;
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  return res.status(200).json(produto);
}

function criar(req, res) {}
function atualizar(req, res) {}
function remover(req, res) {}

module.exports = { listar, buscar, criar, atualizar, remover };
