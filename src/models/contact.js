const mongoose=require("mongoose")

const Contact=mongoose.Schema({
    email:String,
    phone:String,
    query:String,
})

// module.exports=mongoose.model('contact',Contact)
module.exports=mongoose.model('contact',Contact)