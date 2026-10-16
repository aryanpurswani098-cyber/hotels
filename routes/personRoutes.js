const express= require('express');
const router= express.Router();
const Person = require('./../models/person');

router.post('/',async (req,res)=>{
    try{
        
    const data = req.body;
    const newPerson= new Person(data);
    const response= await newPerson.save();
    console.log('data saved.');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/',async(req,res)=>{
    try{
    const data= await Person.find();
    console.log('data sent');
    res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.get('/:work',async (req,res)=>{
    try{
    const work = req.params.work;
    const persons = Person.find({work:work});
    res.status(200).json(persons);
    }catch(err){
        res.status(500).json({error:"Invalid Work Type!"})
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatePersonData=req.body;
        const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true
        }) ;
        console.log('Data Updated');
        res.status(200).json(response);

        if(!response){
            res.status(404).json({error: 'Person Not Found'});
        }
    }catch(err){
        res.status(500).json({error:'Internal Server Error.'});
    }
});

router.delete('/:id', async (req,res)=>{
    try{
    const personId= req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    res.status(200).json(response);
    if(!response){
         res.status(404).json({error: 'Person Not Found'});
    }
    }catch(err){
        res.status(500).json({error:'Internal Server Error.'});
    }
})

module.exports = router;