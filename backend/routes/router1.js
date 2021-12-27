const express = require('express')
const router = express.Router()
const register = require('../models/register')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register',async(req,res,next)=>{
    try{
        let email = register.findOne({email:req.body.email})
        let username = register.findOne({username:req.body.username})
        req.body.token = jwt.sign({email:req.body.email,username:req.body.username},"Prudhvi@1234",{expiresIn:'2h'})
        
        if(email>0){
            res.status(400).json({'success':false,'result':"email already exists"})
        }
        if(username>0){
            res.status(400).json({'success':false,'result':"username already exists"})
        }
        req.body.password = Bcrypt.hashSync(req.body.password,10)
        
        const body = new register(req.body)
        const result = await body.save()
        res.status(200).json({'success':true,'result':result})
    }catch(err){
        console.log(err)
        res.status(400).json({'success':false})
    }
})

router.post('/login',async(req,res,next)=>{
        await register.findOne({$or:[{"email":req.body.user},{"username":req.body.user}]})
        .then(async(user)=>{
            pass = Bcrypt.compareSync(req.body.password,user.password)
            console.log(pass)
            if(pass=req.body.password){
                res.status(200).json({"success":true,"message":"login successfull"}) }
            else{
                res.status(400).json({"success":true,"message":"check your password"})
                }
        })
})


module.exports = router;