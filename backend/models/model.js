const mongoose = require("mongoose")

const employeschema = new mongoose.Schema({
    name:{type:String,required:true},
    position:{type:String,required:true},
    office:{type:String,required:true},
    salary:{type:Number,required:true}
})

const employ = new mongoose.model('employ',employeschema);
module.exports = employ;