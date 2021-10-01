const express = require("express");
require("dotenv").config();
require("./connections/connect");

const routers = require("./routers/control")

const app=express();
const port = process.env.PORT

app.use(express.json());
app.use(routers)

app.listen(port,()=>{
    console.log(`Port connected ${port}`)
})