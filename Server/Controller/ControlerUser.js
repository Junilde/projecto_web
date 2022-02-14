const { redirect } = require('express/lib/response')
const res = require('express/lib/response')
var Userdb = require('../Models/ModelUser')

exports.create = (req,res) =>{

if(!req.body)
{
    res.status(400).send({message:"OS dados não devem ser vasios!"})
    return
}
const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    genero:req.body.genero,
    status:req.body.status
})
//save user in database
user
.save(user)
.then(data =>{
   // res.send(data)
   res.redirect('/add_user')
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Ocorreu algum erro"
    });
});
}
//Cadastro de usuarios normais

exports.create = (req,res) =>{

    if(!req.body)
    {
        res.status(400).send({message:"OS dados não devem ser vasios!"})
        return
    }
    const user = new Userdb({
        name:req.body.name,
        apelido:req.body.apelido,
        email:req.body.email,
        senha:req.body.senha,
        genero:req.body.genero
        
    })
    //save user in database
    user
    .save(user)
    .then(data =>{
       // res.send(data)
       res.redirect('/')
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
    Userdb.findById(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message:  "Não Encotrado usuario com id"+id})
                
        }else{
            res.send(data)
        }
}).catch(err => {
    res.status(500).send({ message: "Erro ao tentar buscar o id"+id})

})  
}else{
     Userdb.find()
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
    Userdb.findByIdAndUpdate(id,req.body, {usefindAndModify:false})
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