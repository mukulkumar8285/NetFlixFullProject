const express  = require("express");
const LoginRegister = require("../controller/user")

const router = express.Router();


router.post("/register" , LoginRegister.Register);
router.post("/login" , LoginRegister.Login);
router.get("/logout" , LoginRegister.Logout);



module.exports = router;