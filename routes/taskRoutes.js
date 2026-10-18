const express= require('erpress');
const router= express.Router();
const task=require('./../models/task');

router.post('/',async(req,res)=>{
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
router.get('/',async (req,res)=>{
    try{
        const data = await task.find();
        console.log('data sent.');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json('Internal Server Error.');
    }
})

module.exports =router