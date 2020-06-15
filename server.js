const express = require('express');
const http = require('http')
const socket = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const io_client = require('socket.io-client');
const path = require('path');
const testr = require('./routes/test');

const app = express();

//require db middleware
require('./config/db');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//set view engine
app.set('view engine', 'ejs');


//routes
app.use('/api',testr);


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Server instance Live on Port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
})


//app.use(express.static(path.join(__dirname, 'public')));

const io = socket(server);

io.on('connect', (socket) =>{
	console.log(`socket connection active: user with ID of:  ${socket.id} connected.`);
	
    setInterval(function(){
	let rand = (Math.floor((Math.random()*20)+1))
	 io.emit('showtimer',rand);
	 //console.log(rand)
     }, 2000);

	socket.on('disconnect', () => {
    console.log(`user disconnected: ${socket.id}`);
  });

});
