const axios = require('axios');


exports.addDocumento=(req, res) => {

   
    res.render('itens/add_documento');
    }

    exports.listaDocumentos=(req, res) => {
         //make a get request to api/users
    axios.get('http://localhost:3000/api/documento')
    .then(function(response){
        //console.log(response)
        res.render('itens/listaDocumento', {documentos:response.data});
    })
    .catch(err => {
        res.send(err)
    })
 
 }

 exports.pesquisardocumentos=(req, res) => {
    //make a get request to api/users
axios.get('http://localhost:3000/api/documento')
.then(function(response){
   //console.log(response)
   res.render('itens/listaDocumento', {documentos:response.data});
})
.catch(err => {
   res.send(err)
})

}

     exports.EditUser=(req, res) => {
        axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
        .then(function(userdata){
            //console.log(response)
            res.render('user/edit_user', {user:userdata.data});
        })
        .catch(err => {
            res.send(err)
        })
     
           
        }

     exports.Login=(req, res) => {
     res.render('login');
     }