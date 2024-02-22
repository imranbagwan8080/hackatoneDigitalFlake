const mongoose = require("mongoose");

require('dotenv').config();

const connectionString = `mongodb+srv://imran:imran@imrancluster.zq4k6q4.mongodb.net/hackaton?retryWrites=true&w=majority`
const connectDb = async() =>{
     try{
           const connect = await mongoose.connect(process.env.CONNECTION_STRING);
           console.log("Database connected: ",
           connect.connection.host,
           connect.connection.name);
     }catch(err){
         console.log(err);
         process.exit(1);
     }
};

module.exports = connectDb;