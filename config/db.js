const mongoose = require('mongoose');
require('dotenv').config();

//url connection String 
const url = process.env.MONGODB_URI;

// starting mongodb connection.
mongoose.connect(url,{useNewUrlParser : true},(err) =>{
    if(!err){
        console.log('Server Connection to DB instance connected Successful!');
    }else{
        console.log('Server Connection Failed to Connect to DB instance')
    }
})
//mongoose.createConnection(url,{useUnifiedTopology: true })


