require('dotenv').config();
const express = require('express');
const cors = require('cors')

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const get = require('./services/get');
const {PORT} = process.env

const app = express()




app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('build')) //usado para correr el front.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))




  //rutas
app.get('/', get)



///////////
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

app.listen(PORT  || 5000, ()=>{
    console.log(`App is running on ${PORT || 5000}`)
})
