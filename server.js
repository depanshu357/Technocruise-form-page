const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());

//connect to mongoose 
mongoose.connect("mongodb+srv://depanshusahu057:pOTGR16YkmqgfvMy@cluster0.drjcmse.mongodb.net/noteDB")

//require root
app.use("/",require("./routes/noteRoute"));

app.listen(3001, function(){
    console.log("The server is started on http://localhost:3001");
})