// Steps :
// 1. Define Scheme -> Details of model or information like Node model : id, userid, title, content, dateadded called schema
// 2. Create Model -> <model name> <schema> like Note


const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id: {
        type : String,
        unique : true,
        required : true,
    },
    userid: {
        type: String,
        required: true,
    },
    title:{
        type : String,
        required: true,
    },
    content : {
        type: String,
    },
    dateadded:{
        type:Date,
        default: Date.now,
    }
});


module.exports = mongoose.model("Note",noteSchema);
