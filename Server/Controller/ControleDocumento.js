const { redirect } = require('express/lib/response')
const res = require('express/lib/response')
var DocumentoDb = require('../Models/ModelDocumento')

exports.create = (req,res) =>{

if(!req.body)
{
    res.status(400).send({message:"OS dados não devem ser vasios!"})
    return
}
const documento = new DocumentoDb({
    numero:req.body.numero,
    nome_titular:req.body.nome_titular,
    descricao:req.body.descricao,
    local_perda:req.body.local_perda
})
//save documento in database
documento
.save(documento)
.then(data =>{
   // res.send(data)
   res.redirect('/add_documento')
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Ocorreu algum erro"
    });
});
}

//retornar usuarios e un usuario
exports.find = (req,res) => {

    if(req.query.id){
        const id= req.query.id;
    DocumentoDb.findById(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message:  "Nenhum documento com  id"+id})
                
        }else{
            res.send(data)
        }
}).catch(err => {
    res.status(500).send({ message: "Erro ao tentar buscar o id"+id})

})  
}else{
     DocumentoDb.find()
        .then(user => {
            res.send(user)
 
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Não existe usuarios"})
           })  
    }
}



//Actualizar
exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})

    }
    const id = req.params.id;
    DocumentoDb.findByIdAndUpdate(id,req.body, {usefindAndModify:false})
    .then(data =>{
        if(!data){ 
        res.status(404).send({ message:`Não foi possivel actualizar o usuario com ${id}, Não encontrado`})

            }else{
                res.send(data)
            }
    }).catch(err => {
        res.status(500).send({message:  "não actualizado"})
    })
}