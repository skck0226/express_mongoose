//Load packages
require('dotenv').config();
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


// CONNECT TO MONGODB SERVER
mongoose.Promise = global.Promise;
const db = mongoose.connection;
mongoose.connect(process.env.MONGO_URI)
	.then(()=>console.log('mongodb connected'))
	.catch((err)=>console.error(err));

app.listen(port,(req,res)=>{
	console.log(`server on : ${port}`);
});