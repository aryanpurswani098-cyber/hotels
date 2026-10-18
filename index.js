const express = require('express');
let app = express();
const db =require('./db');
const bodyParser=require('body-parser');
require('dotenv').config();

//Get Method

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Welcome to out Hotel!");
});

// Person

const personRouter=require('./routes/personRoutes');
app.use('/person',personRouter);

// Menu

const menuRouter=require('./routes/menuRoutes');
app.use('/menu',menuRouter);


// Tasks

const taskRouter=require('./routes/taskRoutes');
app.use('/task',taskRouter);

//Port 

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("Server running on port 3000.")
});