const axios = require('axios');


exports.homeRoutes=(req, res) => {
res.render('index');
}

exports.addUser=(req, res) => {

   
    res.render('user/add_user');
    }

    exports.Cadastro=(req, res) => {

   
        res.render('user/cadastro');
        }
    

    exports.ListaUser=(req, res) => {
         //make a get request to api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        //console.log(response)
        res.render('user/user', {users:response.data});
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

     
     exports.admin=(req, res) => {
        res.render('admin/admin');
        }