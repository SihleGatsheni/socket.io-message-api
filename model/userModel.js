const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
_id : Schema.Types.ObjectId,
username:{
    type: String,
    required:true,
    unique:true
},
email: {
    type:String,
    required:true,
    unique:true
},
_pass:{
    type:true,
    required:true
},
createAt:{
    type:Date,
    default:Date.now
}

});
module.exports = mongoose.model('User',userSchema)