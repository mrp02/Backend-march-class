const express = require("express");
const router = express.Router();
const {welcomeUser} = require("../Controllers/User.Controller");
const {about, register, login, registerUser, loginUser, dashboard, uploadFile, sendMail } = require("../Controllers/User.Controller");

router.get("/", welcomeUser);
router.get("/about", about);
router.get("/loginUser", login);
router.get("/dashboard", dashboard);
router.get("/sendmail", sendMail);
router.get("/register", register);
router.post("/registerUser", registerUser);
router.post("/login", loginUser);
router.post("/uploadfile", uploadFile);

module.exports = router; //exporting the router