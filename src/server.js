const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');
const router = require('./routes/Note');
const ServerlessHttp = require('serverless-http');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// true -> Nested objects(correct)
// false -> Nested objects(Not correct)

const mongoDbPath = "mongodb+srv://prabhat:prabhat12345@cluster0.5iztyzt.mongodb.net/notesApp"


mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL, () => {
//   console.log("Connected to MongoDB");
// });


mongoose.connect(mongoDbPath).then(function(){
    app.get('/',function(req,res){
        const response = {message : "API Works!"};
        res.json(response);
    });

    const noteRouter = require('./routes/Note'); 
    app.use("/notes",noteRouter);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log('Server is started on POST: '+PORT);
});

// app.use('/.netlify/src/server.js',router);
// module.exports.handler = ServerlessHttp(app);