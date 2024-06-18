//step 1
const databaseConnection = require("./utils/database");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const cors = require("cors");
// const path = require("path");

dotenv.config({
  path: ".env",
});
databaseConnection();
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: "http://localhost:3000",
    methods:["POST", "GET"],
    credentials: true,
}

app.use(cors(corsOption));

//api 
app.use("/api/v1/user" , userRouter);


app.listen(8080, () => {
  console.log("Server is Running 8080");
});
