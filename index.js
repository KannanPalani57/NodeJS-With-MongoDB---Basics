const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");


//mongodb atlas database url 
const dbUri = "Put your mongodb address url"

mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
            .then((result) => app.listen(4000, () => {
                console.log("db connected")
            }))
            .then(err => console.log(err))

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    const user = new User({
        username: "Kannan Palani"
    })
    user.save().then(result => res.send(result)).catch(err => console.log(err));
})

