const e = require('express');
const express = require('express')
const router = express.Router();

const employees = require('../models/employe');


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
router.post('/',async(req,res,next)=>{
    try{
        const employ = new employees(req.body)
        const a = await employ.save()
        res.status(201).send(a)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/',async(req,res,next)=>{
    try{
        const emplo = await employees.find()
        res.status(201).send(emplo)
       }
    catch(err){
        console.log(err)
    }
})

router.put('/:_id', async(req,res,next)=>{
    try{
        const _id = req.params._id;
        const update = await employees.findByIdAndUpdate(_id,req.body,{new:true})
        res.status(201).send(update)
        
    }
    catch(err){
        res.status(400).send(err)
    }
})


router.delete('/:_id',async(req,res,next)=>{
    try{
        const deleteemploye = await employees.findByIdAndDelete(req.params._id);
        if(!req.params._id){
            return res.status(400).send();
        }
        res.send(deleteemploye)
    }
    catch(err){
        return res.status(400).send(err);
    }
})

module.exports = router;