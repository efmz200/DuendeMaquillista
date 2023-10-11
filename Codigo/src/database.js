const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const dbname = process.env.MONGO_DB;
//const user = "Manejador_codigo";
//const password = "oeDnZXIYmQevbOAO";
//const dbname = "DuendeMaquillista"


const URI = `mongodb+srv://${user}:${password}@cluster0.swfljtx.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;


