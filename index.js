const express = require('express');
let app = express();
const db =require('./db');
const bodyParser=require('body-parser');
const task=require('./models/task');

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

app.post('/task',async(req,res)=>{
    try{
        const data=req.body;
        const newTask = new task(data);
        const response = await newTask.save();
        console.log("Data saved.");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error.'});
    }
});
app.get('/task',async (req,res)=>{
    try{
        const data = await task.find();
        console.log('data sent.');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json('Internal Server Error.');
    }
})
app.listen(3000,()=>{
    console.log("Server running on port 3000.")
});