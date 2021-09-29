const mongoose = require('mongoose');
const url = process.env.url ;

mongoose.connect(url,{
    UseNewUrlParser:true
}).then(()=>{
    console.log('connected sucessfully')
}).catch((e)=>{
    console.log("not connected",e)
})
