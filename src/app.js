const express=require('express')
const  Student=require('./models/students')
require('./db/connection')
const app=express()

// middleware
app.use(express.json())

// Create new students
app.post('/students',(req,res)=>{
    const student=new Student(req.body);
    student.save().then(()=>{
        console.log("obj created")
        res.status(201).send(student)
    }).catch((err)=>{
        console.log(err)
        res.status(400).send(err)
    })
})


app.listen(3000,()=>{
    console.log("Listening at port 3000")
})