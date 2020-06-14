const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const io = require('socket.io');
const io_client = require('socket.io-client');

//calling express as a function
const app = express();

//require http module
const http = require('http').Server(app);

//require db middleware
require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 8080;
http.listen(PORT, ()=>{
    console.log(`Server instance Live on Port ${PORT}`);
})