const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/socketDB'

mongoose.connect(url,{useNewUrlParser : true},(err) =>{
    if(!err){
        console.log('Server Connection to DB instance connected Successful!');
    }else{
        console.log('Server Connection Failed to Connect to DB instance')
    }
})
//mongoose.createConnection(url,{useUnifiedTopology: true })


