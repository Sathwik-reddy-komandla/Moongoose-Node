// const mongoose =require('mongoose')
// mongoose.connect("mongodb://localhost:27017/students-api",{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })  .then(() => {
//     console.log("connected")
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });
//   //  
// const mongoose = require('mongoose');

// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/mydatabase', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB!');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }
// connectToDatabase();

const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/students-api',
 {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("connected")
}).catch((e)=>{
  console.log('error occured')
  console.log(e)
})