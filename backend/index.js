const databaseConnection = require("./utils/database");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const cors = require("cors");

dotenv.config({
  path: ".env",
});
databaseConnection();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
  origin: ["https://net-flix-full-project-2.vercel.app" || "http://localhost:3000"],
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOption));

// Handle preflight requests
app.options("*", cors(corsOption));

// API routes
app.use("api/v1/user", userRouter);
app.get("/",(req,res)=>{
  res.json({
    massage:"working",
  });
})
app.get("api/v1/user/login",(req,res)=>{
  res.json({
    massage:"login",
  });
})
  
app.listen(8080, () => {
  console.log("Server is Running on port 8080");
});
