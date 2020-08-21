const express = require('express');
const cors = require('cors');
const data = require('./data');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/products', (req, res) =>{
    res.send(data.products);
})

app.listen(8000, () =>{
    console.log('Server Runing at port 8000');
})