const mongoose = require("mongoose");

const formSchema ={
    name: String,
    email:String,
    collegeName:String,
    collegeCity:String,
    phoneNumber:String
}

const Form = mongoose.model("Form",formSchema);

// hello
module.exports = Form;