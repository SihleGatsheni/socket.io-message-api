const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const io = require('socket.io');
const io_client = require('socket.io-client');
//const http = require('http').createServer(express);



const app = express();


require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server instance Live on Port ${PORT}`);
})