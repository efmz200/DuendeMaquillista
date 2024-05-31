const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const dbname = process.env.MONGO_DB;


//const URI = `mongodb+srv://${user}:${password}@cluster0.swfljtx.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const URI = 'mongodb+srv://deylan16:De16072002@custerrepositorio.xqui8vq.mongodb.net/?retryWrites=true&w=majority&appName=CusterRepositorio'
mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;


