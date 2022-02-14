const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express()
//const conectDB = require('./Server/Database/connetion');


dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//logs requests
app.use(morgan('tiny'));
//conectDB();
//mongodb conexão
const dbURL= "mongodb+srv://admin:admin123@cluster0.3ejrh.mongodb.net/Users?retryWrites=true&w=majority"

mongoose.connect(dbURL,{useNewUrlParser: true, 
                      useUnifiedTopology: true
                   
                    }).then(() =>{
                    console.log("Conexão realizada com sucesso");

                    }).catch((erro) =>{
                        console.log("Conexão não realizada com sucesso");  
                    });

//parse requets to body-parser
app.use(bodyparser.urlencoded({extended : true})
)
// set enviw engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname,"views/ejs") )
// loads assts

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.use('/imgs',express.static(path.resolve(__dirname,'assets/imgs')))

//css styles
//loads router
app.use(require('./Server/Routes/routes'))
app.use(require('./Server/Routes/routeDocumento'))
app.listen(PORT, () => {
console.log(`Server is running on http:localhost:$(PORT)`)})

