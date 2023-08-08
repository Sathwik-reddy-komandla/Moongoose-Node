const express=require('express')
const  Student=require('./models/students')
require('./db/connection')
const app=express()

// middleware
app.use(express.json())

// Create new students
// app.post('/students',(req,res)=>{
//     const student=new Student(req.body);
//     student.save().then(()=>{
//         console.log("obj created")
//         res.status(201).send(student)
//     }).catch((err)=>{
//         console.log(err)
//         res.status(400).send(err)
//     })
// })


// Create new Students using Async Await
app.post('/students',async(req,res)=>{
    
    try{
    const student=new Student(req.body)
    const createStudent=await student.save()
    res.status(201).send(createStudent)
    }
    catch(e){
        res.status(400).send(e)
    }    
})


// get all students
app.get('/students',async(req,res)=>{
    try{
        const students=await Student.find()
        res.status(200).send(students)
    }
    catch(e){
        
        console.log(e)
        res.status(400).send(e)
    } 
})

// get individual student
app.get('/students/:id',async(req,res)=>{
    try{
        // const students=await Student.findOne({_id:req.params.id})
        const student=await Student.findById({_id:req.params.id})
        if(!student){
            return res.status(404).send();
        }else{
        res.status(200).send(student)
        }    
    }
    catch(e){
        res.status(400).send(e)
    } 
})



app.listen(3000,()=>{
    console.log("Listening at port 3000")
})