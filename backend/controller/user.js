const jwtToken = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Invalid User 1", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: "Invalid Email & Password",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: "Invalid Email & Password 2",
        success: false,
      });
    }

    const tokenData = {
        id: user._id

    }
    const token  = await jwtToken.sign(tokenData , "iubfb887xgts8def87egfefrvfr" ,{expiresIn:"1d"})
    return res.status(200).cookie("token" ,token ,{httpOnly:true}).json({
        message:`Welcome Back ${user.fullName}`,
        user,
        success:true,
    })


  } catch (error) {
    console.log(error);
  }
};

const Logout = async(req, res)=>{
    return res.status(200).cookie("token" , "" , {expiresIn:Date(Date.now()) , httpOnly:true}).json({
        success : true,
        message : "User Logout Successfully"
    })


}




const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        success: false,
        message: "Email already exists",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashpassword,
    });
    res.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const LoginRegister = {
    Register,
    Login,
    Logout,
}

module.exports = LoginRegister;
