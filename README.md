# API REST de Produtos
**Nome:** Gabriel Gonçalve Fonseca 
**Matrícula:** 202501022031
## Descrição
Este projeto é uma API desenvolvida em Node.js para o gerenciamento de uma lista de produtos.

## Endpoints
| Método | Rota | Descrição | Status de Sucesso |
|--------|------|-----------|-------------------|
| GET | /api/v1/produtos | Lista todos os produtos | 200 |
| GET | /api/v1/produtos/:id | Busca produto por ID | 200 |
| POST | /api/v1/produtos | Cria novo produto | 201 |
| PUT | /api/v1/produtos/:id | Atualiza produto completo | 200 |
| DELETE | /api/v1/produtos/:id | Remove produto | 204 |

## Exemplo de corpo para POST/PUT
{
  "nome": "Painel Solar 400W",
  "descricao": "Painel fotovoltaico monocristalino",
  "preco": 899.90,
  "categoria": "equipamento",
  "estoque": 42
}
## Instruções de Execução
1. Clone o repositório: git clone https://github.com/seu-usuario/produtos-api-gabrielfonseca-1.git
2. Entre na pasta do projeto:cd produtos-api-gabrielfonseca-1
3. Instale as dependências:npm install
4. Inicie o servidor:node src/app.js
5. O servidor estará rodando em: http://localhost:3000
