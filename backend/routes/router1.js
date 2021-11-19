const express = require('express')
const router = express.Router()
const register = require('../models/register')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register',async(req,res,next)=>{
    try{
        let email = register.findOne({email:req.body.email})
        let username = register.findOne({username:req.body.username})
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
    try{
        let res1 = await register.find({$or:[{"email":req.body.user},{"username":req.body.user}]}).count();
        let res2 = await register.find({$or:[{"email":req.body.user},{"username":req.body.user}]});
        console.log(res2)
        console.log(typeof res2)
        if(res1>0){
            console.log(res2)
            console.log("found",res2[0]["password"])
            password = Bcrypt.compareSync(res2[0]["password"],hash)
            console.log(password)
            if(res2.password==password){
                console.log("matched password")
            }
        }
        }
        // let obj = {
        //     'autherization': true,
        //     'token': token,
        //     'companyId': user[0].companyId,
        //     'user':user,
        //     // 'roles':authorities                        
    
    catch(err){
        console.log(err)
    }
})

module.exports = router;