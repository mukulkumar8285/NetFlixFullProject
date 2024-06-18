const mongoose  = require("mongoose")
require('dotenv').config();


const databaseConnection = async() =>{
  await mongoose.connect("mongodb+srv://mukulved07:e-commerce@cluster0.1aftvbc.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoDb Connection Successfully")

   }).catch((error)=>{
    console.log("Error in MongoDb Connection", error)
   })
}
module.exports = databaseConnection;
