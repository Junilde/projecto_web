const mongoose = require('mongoose');

const conectDB = async() =>{
try{
    //mongodb conexão
    const con = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    console.log(`MongoDB conneted:${con.connection.host}`);
}catch(err)
{
console.log(err);
process.exit(1);
}
}
module.exports=conectDB



/*
const dbURL= "mongodb+srv://admin:preciosa@cluster0.3ejrh.mongodb.net/users?retryWrites=true&w=majority"

mongoose.connect(dbURL,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false }, () =>
console.log("connectd to databse"));
*/