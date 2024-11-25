const mongoose=require("mongoose")
const about_sec=mongoose.Schema({
    about:String,
})  
module.exports=mongoose.model('about_sec',about_sec)