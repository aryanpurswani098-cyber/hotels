const express =require('express');
const router =express.Router();
const menu=require('./../models/menu')


router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newItem= new menu(data);
        const response = await newItem.save();
        console.log("Data Saved.");
        res.status(200).json(response);
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Error.'});
        }
});

router.get('/',async (req,res)=>{
    try{
        const data = await menu.find();
        console.log('data sent');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error.'});
    }
});

router.get('/:taste',async (req,res)=>{
    try{
        const taste = req.params.taste ;
        const items = await menu.find({taste:taste});
        res.status(200).json(items);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.put('/:id',async (req,res)=>{
    try{
        const itemId=req.params.id;
        const updateItem=req.body;
        const response = await menu.findByIdAndUpdate(itemId,updateItem,{
            new:true,
            runValidators:true
        });
        res.status(200).json(response);

        if(!response){
            res.status(404).json({error:'Item Not Found'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.delete('/:id',async (req,res)=>{
    try{
        const itemId=req.params.id;
        const response= await menu.findByIdAndUpdate(itemId);
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
});

//comment added

module.exports = router;
