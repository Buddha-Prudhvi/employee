const mongoose = require('mongoose')

const registerschema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const register = new mongoose.model('register',registerschema);
module.exports = register;