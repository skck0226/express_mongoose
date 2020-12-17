//Load packages
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cors
app.use(cors());

const port = process.env.PORT || 3000;

app.use('/api/books',indexRouter);

app.listen(port,(req,res)=>{
	console.log(`${port} hello`);
});

// CONNECT TO MONGODB SERVER
const db = mongoose.connection;

db.on('error',console.error);
db.once('open', ()=>{
	console.log('Connected to mongoDB');
});

mongoose.connect('mongodb://localhost/tutorial');