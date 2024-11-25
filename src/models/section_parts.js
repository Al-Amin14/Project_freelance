const mongoose=require('mongoose')

const sec_both=mongoose.Schema({
    img:String,
    details_txt:String,
})

module.exports=mongoose.model('sec_both',sec_both)