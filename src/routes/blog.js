const express=require("express")
const routes=express.Router()
const mongoose=require("mongoose")
const details=require("../models/details.js")
const slider=require("../models/slider.js")

routes.get('/', async(req,res)=>{
    // let follow1=await details.findOne({"_id":"66e9be75c8666d0cf7de9998"})
    // console.log(follow1)
    res.send("New Bie")
    // slider.create([
    //         {
    //             title:'Learn java in easy manner',
    //             subtitle:'Java is one of the most popular Programming language',
    //             imageUrl:'images/BingWallpaper (1).jpg'
    //         },
    //         {
    //             title:'Django is frameWork',
    //             subtitle:'Django is one of the most popular Programming language',
    //             imageUrl:'images/BingWallpaper (3).jpg'
    //         },
    //         {
    //             title:'Learn Python in easy manner',
    //             subtitle:'Pyton is one of the most popular Programming language',
    //             imageUrl:'images/BingWallpaper (4).jpg'
    //         }
    //     ]
    // )
    // details.create({
    //     brandName:"Info Technical Solution",
    //     brandUrl:"https://img.freepik.com/free-vector/counslting-branding-identity-corporate-vector-logo-design_460848-13846.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/home",
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Link",
    //             url:"/link",
    //         },
    //         {
    //             label:"Disable",
    //             url:"/disable"
    //         },
    //         {
    //             label:"Gallary",
    //             url:"/gallary",
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         }
    //     ]
    // })
})

routes.get('/index',async(req,res)=>{
    // let data1=details.findOne({""})
    let follow1=await details.findOne({"_id":"66e9be75c8666d0cf7de9998"})
    let slider_flow=await slider.find()
    console.log(slider_flow[0]["class"])
    res.render('index',{details:follow1,sli_det:slider_flow})
})


routes.get('/gallary',async (req,res)=>{
    let follow2=await details.findOne({"_id":"66e9be75c8666d0cf7de9998"})
    res.render('gallary',{details:follow2})
})

module.exports=routes