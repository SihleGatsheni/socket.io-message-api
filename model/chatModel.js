const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = Schema({
_id : Schema.Types.ObjectId,
chat:{
    type:String,
    required:true
},
user:{
    type:Schema.Types.ObjectId,
    required:true,
    ref: 'User'
},
createAt:{
    type:Date,
    default:Date.now
}

});
module.exports = mongoose.model('Chat',chatSchema)