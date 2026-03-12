let produtos = [];
let nextId = 1;

function listar(req, res) {}

function buscar(req, res) {}

function criar(req, res) {}

function atualizar(req, res) {}

function remover(req, res) {}

module.exports = {
  listar,
  buscar,
  criar,
  atualizar,
  remover
};
function listar(req, res) {
  return res.status(200).json(produtos);
}