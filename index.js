const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

const produtos = [
    { id: 1, nome: 'Smartphone Motorola G85', marca: 'Motorola', preco: 1800.00, quantidade: 50 }, 
    { id: 2, nome: 'TV Lg 42 polegadas', marca: 'Motorola', preco: 1499.99, quantidade: 12 },
    { id: 3, nome: 'Notebook Aspire 5', marca: 'Acer', preco: 3299.00, quantidade: 5 },
    { id: 4, nome: 'Fone de Ouvido Bluetooth', marca: 'JBL', preco: 249.90, quantidade: 25 },
    { id: 5, nome: 'Monitor Gamer 27"', marca: 'AOC', preco: 1899.00, quantidade: 10 },
    { id: 6, nome: 'Cafeteira Espresso', marca: 'Philco', preco: 499.99, quantidade: 7 },
    { id: 7, nome: 'Mouse sem fio', marca: 'Logitech', preco: 129.90, quantidade: 30 },
    { id: 8, nome: 'Teclado Mecânico RGB', marca: 'Redragon', preco: 359.99, quantidade: 15 },
    { id: 9, nome: 'Geladeira Frost Free 400L', marca: 'Electrolux', preco: 2999.99, quantidade: 4 },
    { id: 10, nome: 'Caixa de Som Portátil', marca: 'Sony', preco: 649.90, quantidade: 18 },
    { id: 11, nome: 'Ventilador Turbo 40cm', marca: 'Arno', preco: 219.90, quantidade: 20 },
    { id: 12, nome: 'Micro-ondas 20L', marca: 'Panasonic', preco: 749.99, quantidade: 9 }
]
/** Ponto de entrada raíz da aplicação 
 * @param req objeto com os dados da requisição HTTP
 * @param res objeto para tratar a resposta HTTP
*/
app.get('/', (req, res) => { res.redirect('/produtos') })
/** Devolve a lista de todos os produtos */
app.get('/produtos', (req, res) => { res.json(produtos) })
/** Devolve um produto específico pelo seu id */
app.get('/produtos/:id', (req, res) => {
    const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { 
          res.json(prod) 
        } else { 
          res.json({}) 
        }
    } else {
      res.json({})
    }
})
//Obter o preço de um produto dado o seu id
app.get('/produtos/:id/preco', (req, res) => {
  const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { 
          res.json(prod.preco) 
        } else { 
          res.json({}) 
        }
    } else {
      res.json({})
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})