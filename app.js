require("./config/db");
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var path = require('path');
var cityToZip = require('./routes/cityToZip');
var zipToArea = require('./routes/zipToArea');
var http = require('http');
var app = new express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('dev'));

app.use(cors({origin:'http://localhost:4200'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'view/dist')));

// app.get('*',(req,res)=> {
//   res.sendFile(path.join(__dirname,'view/dist/view/index.html'));
// });

app.use('/cityToZip', cityToZip);
app.use('/zipToArea', zipToArea);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=> console.log(`Running on localhost:${port}`));

module.exports = app;
