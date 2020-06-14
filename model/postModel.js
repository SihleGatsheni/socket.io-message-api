const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = Schema({
_id : Schema.Types.ObjectId,
post:{
    type: String,
    required:true,
},
user: {
    type:Schema.Types.ObjectId,
    required:true,
    ref: 'User'
},
updateAt:{
    type:Date,
    default:Date.now
}

});
module.exports = mongoose.model('Post',postSchema);