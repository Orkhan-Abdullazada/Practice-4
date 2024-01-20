const express=require("express")
const app=express()
const CourseRouter=require("./Router/Course.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT||4141
app.use(express.json())
mongoose.connect("mongodb+srv://orxan:orxan123@orxanabdullayef.klfqe1s.mongodb.net/").then(res=>{
    console.log("connected mg")
})
app.use("/course",CourseRouter)

app.listen(PORT,()=>{
    console.log("back running on 4141")
})