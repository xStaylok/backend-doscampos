//declaraciones 
const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
//fin de declaraciones

const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//conexion DB
mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("Conectado a la DB");
});
//fin conexion DB
//rutas servicios
const registroForm = require('./funcionalidad/rutas/registroForm');

router.use('/registroForm',registroForm);




router.get('/', (req, res) => {
  res.send('Hello World!')
})

//finrutas servicios

app.use('/backend-doscampos',router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})