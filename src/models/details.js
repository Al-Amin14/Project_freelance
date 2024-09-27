const mongoose=require("mongoose")
const details=mongoose.Schema({
    brandName:String,
    brandUrl:String,
    links:[
        {
        label:String,
        url:String,
        }
    ]
});

module.exports=mongoose.model("keeping_data",details)