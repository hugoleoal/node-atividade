const produtos = require('../data/produtos.json');

exports.post = (req, res, next) => {
   let id = req.body.id
   if (id==null || id==undefined || !produtos.includes(x=>x.id==id)) {
      res.status(500).send("Erro - id não pode ser nulo ou já existe"); 
   }
    produtos.push(req.body)
    res.status(201).send();
 };
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    if (id==null || id==undefined) {
      res.status(500).send("Erro - id não pode ser nulo"); 
   }
   produtos.forEach( (item, index) => {
      if(item.id == id) {
     produtos[index].descricao = req.body.descricao
     produtos[index].marca = req.body.marca
     produtos[index].valor = req.body.valor
    }});
    res.status(200).json();
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    produtos.forEach( (item, index) => {
      if(item.id == id) {
       produtos.splice(index,1);
    }});
    res.status(200).send();
 };
  
 exports.get = (req, res, next) => {
    res.status(200).json(produtos);
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).json(produtos.filter(x=>x.id==id));
 };