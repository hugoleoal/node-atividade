const ProdutoController = require('../controllers/produto-controller');
module.exports = (app) => {
   app.post('/produtos', ProdutoController.post);
   app.put('/produtos/:id', ProdutoController.put);
   app.delete('/produtos/:id', ProdutoController.delete);
   app.get('/produtos', ProdutoController.get);
   app.get('/produtos/:id', ProdutoController.getById);
}