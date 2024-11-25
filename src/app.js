const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const blog=require("./routes/blog.js")
const ejs=require('ejs')
const mongoose=require("mongoose")
const details=require("./models/details.js")

app.use(bodyParser.urlencoded({
    extended:true
}))



app.use(express.static('public'))

mongoose.connect("mongodb://localhost:27017/project_freelance")

app.use('',blog)

let port=3000

app.set('view engine','ejs')

app.listen(port,()=>{
    console.log(`Server have started`)
})