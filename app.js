const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = process.env.port;

const con = mongoose.connection;
con.on('open',function(){console.log('connected')});

app.listen(port,()=>{
    console.log("port connected",`$(port)`)
})