const employe = require('../models/model')
const express = require('express')
const router = express.Router()

router.post('/save',async(req,res,next)=>{
    try{
        const employ = new employe(req.body) 
        const result = await employ.save()
        res.status(200).json({result:result,success:true})
    }catch(e){
        console.log(e)
        res.status(400).json({success:false})
    }
})

router.get('/findBy/:id',async(req,res,next)=>{
    try{
        const result = await employe.findById(req.params.id)
        res.status(200).json({result:result,success:true})
    }catch(e){
        console.log(e)
        res.status(400).json({success:false})
    }
})

router.get('/getall',async(req,res,next)=>{
    try{
        const result = await employe.find()
        res.status(200).json({result:result,success:true})
    }catch(e){
        console.log(e)
        res.status(400).json({success:false})
    }
})

router.put('updateBy/:id',async(req,res,next)=>{
    try{
        const data =  {name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary}
        const result = await employe.findOneAndUpdate({_id:req.params.id},{$set:data})
        res.status(200).json({result:result,success:true})
    }catch(e){
        console.log(e)
        res.status(400).json({success:false})
    }
})

router.delete('deleteBy/:id',async(req,res,next)=>{
    try{
        const result = await employe.findByIdAndDelete(req.params.id)
        res.status(200).json({result:result,success:true})
    }catch(e){
        console.log(e)
        res.status(400).json({success:false})
    }
})

module.exports = router;