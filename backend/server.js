const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const app = express();

connectDb();
//const port = process.env.PORT;
const port = 5000;

app.use(cors());

// use middleware to accept data from client to server we need parser
app.use(express.json());

//middelware for routing and there location

app.use("/hackaton/product", require("./routes/productRoutes"));
app.use("/hackaton/category", require("./routes/categoryRouters"));
app.use("/hackaton/user", require("./routes/userRouters"));

// middelware for error to convert json format and sent to client
app.use(errorHandler);


app.listen(port, () =>{
    console.log(`server running on post no ${port}`);
});