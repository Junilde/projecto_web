
const mongoose = require('mongoose');

var schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    apelido:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    senha:{
        type: String,
        required:true,
      
    },
        genero:String,     

});
const Userdb = mongoose.model('usuarios', schema)


module.exports = Userdb