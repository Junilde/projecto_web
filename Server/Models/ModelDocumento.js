
const mongoose = require('mongoose');

var schema= new mongoose.Schema({
    numero:{
        type:String,
        required:true     
    },
    nome_titular:{
        type: String,
        required:true
       
    },
    descricao:{
        type: String,
        required:true
       
    },
    local_perda:{
        type: String,
        required:true
       
    }
           

});
const DocumentoDb = mongoose.model('documento', schema)


module.exports = DocumentoDb