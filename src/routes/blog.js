const express=require("express")
const routes=express.Router()
const mongoose=require("mongoose")
const sec_both=require("../models/section_parts.js")
const details=require("../models/details.js")
const slider=require("../models/slider.js")
const contact=require("../models/contact.js")
const services=require("../models/services.js")
const about_sec=require("../models/about_section.js")


routes.get('/', async(req,res)=>{
    // let follow1=await details.findOne({"_id":"66e9be75c8666d0cf7de9998"})
    // console.log(follow1)
    res.send("New Bie")
    
    // sec_both.create({
    //     img:"/images/demo1.jpg",
    //     details_txt:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolore, nam omnis eaque dignissimos accusamus, quos placeat magni, adipisci fuga ipsam suscipit nobis doloribus soluta. Explicabo veniam minus libero ex. Ipsum praesentium itaque aperiam mollitia, unde harum velit sapiente dignissimos, exercitationem nemo illum voluptatum in laboriosam corrupti ipsam doloribus voluptates ab alias rem!"
    // })
    // about_sec.create({
    //     about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum nemo saepe facere eaque tempora, animi aut ipsam reprehenderit. Nemo laborum, nobis libero laboriosam culpa doloremque ducimus mollitia quae tenetur? Delectus aliquam ea quam, ipsam exercitationem officiis in a perspiciatis molestiae. Numquam inventore expedita adipisci, similique quam error! Ipsum repellat accusantium ullam tempora."
    // })
    // services.create([
    //     {
    //     icon:"fab fa-accusoft text-secondary",
    //     title:"Provide Best Course",
    //     description:"A quick brown fox jump over the lazy red dog",
    //     linkText:"Press",
    //     link:"http://www.google.com",
    //     },
    //     {
    //     icon:"fab fa-accusoft text-secondary",
    //     title:"Provide Sevices for everyone",
    //     description:"A quick brown fox jump over the lazy rakune",
    //     linkText:"Press",
    //     link:"http://www.google.com",
    //     },
    //     {
    //     icon:"fab fa-accusoft text-secondary",
    //     title:"This javaScript Course",
    //     description:"A quick brown tiger stared the lazy red dog",
    //     linkText:"Press",
    //     link:"http://www.google.com",
    //     }
    // ])
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
    // console.log(`${follow1}`);
    let section_part=await sec_both.find(); 
    let about_part=await about_sec.find();
    
    let slider_flow=await slider.find()
    // console.log(`${slider_flow}`)
    let Sevices_provie=await services.find()
    // console.log(`${Sevices_provie}`)
    console.log(section_part)
    res.render('index',{details:follow1,sli_det:slider_flow,servieces_data:Sevices_provie,sec_part:section_part,about:about_part})
})


routes.get('/gallary',async (req,res)=>{
    let follow2=await details.findOne({"_id":"66e9be75c8666d0cf7de9998"})
    console.log(follow2)
    res.render('gallary',{details:follow2})
})

// routes.get('/#contact_us_section',async(req,res)=>{
//     res.render('#contact_us_section')
// })

routes.post('/process-contact-form',async(req,res)=>{
    console.log("Body is prarsing")
    console.log(req.body)
    try{
        const data=await contact.create(req.body)
        console.log(body)
        res.redirect('/gallary')
    }catch(e){
        console.log(e)
        res.redirect('/gallary')
    }
})
// routes.post('/process-contact-form',async (req,res)=>{
//     console.log("Body is parsing")
//     console.log(req.body)
//     try{
//         const data=await contact.create(req.body)
//         console.log(data)
//         res.redirect("/index")
//     }catch(e){
//         console.log(e)
//         res.redirect("/index")
//     }
// })

module.exports=routes