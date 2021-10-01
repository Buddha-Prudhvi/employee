const mongoose = require("mongoose");
const url = process.env.URL;

mongoose.connect(url).then(
    () => { console.log("connected succefully") })
    .catch((err) => {
        console.log(err)
    })