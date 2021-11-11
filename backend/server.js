const app = require("./app")
const mongoose = require("mongoose")
require("dotenv").config()

port = process.env.PORT || 5000
url = process.env.URL

mongoose.connect(url)


app.listen(port,()=>{
    console.log(`connected to ${port}`)
})