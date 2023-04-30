const produtos = require('../data/produtos.json');

exports.delete = (request, response, next) => {
    let id = request.params.id;
    produtos.forEach( (item, index) => {
      if(item.id == id) {
       produtos.splice(index,1);
    }});
    response.status(200).send();
 };
  
 exports.put = (request, response, next) => {

   let id = request.params.id;

   if (id==null || id==undefined) {
     response.status(500).send("Id não pode ser nulo"); 
  }
  produtos.forEach( (item, index) => {
     if(item.id == id) {
         produtos[index].descricao = request.body.descricao
         produtos[index].marca = request.body.marca
         produtos[index].valor = request.body.valor
       }});
   response.status(200).json();
};

 exports.post = (request, response, next) => {
   let id = request.body.id
   if (id==null || id==undefined || !produtos.includes(x=>x.id==id)) {
      response.status(500).send("Id não pode ser nulo"); 
   }
    produtos.push(request.body)
    response.status(201).send();
 };

 exports.get = (request, response, next) => {
    response.status(200).json(produtos);
 };
  
 exports.getById = (request, response, next) => {
    let id = request.params.id;
    response.status(200).json(produtos.find(x=>x.id==id));
 };