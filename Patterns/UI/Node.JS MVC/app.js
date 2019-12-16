const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const homeRouter = require("./routes/homeRouter");
const userRouter = require("./routes/userRouter");
const http = require('http');

// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('asdasdasd')
//   // мы подключены!
//});

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));
// User routes
app.use('/users', userRouter);

// Home routes
app.use('/', homeRouter);

// обработка ошибки 404
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

const server = http.createServer(app);
mongoose.connect("mongodb://127.0.0.1:27017/usersdb", { useNewUrlParser: true, useUnifiedTopology: true, socketTimeoutMS: 60000 }, function(err){
    if(err) return console.log(err);
    server.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

// app.listen(3000);