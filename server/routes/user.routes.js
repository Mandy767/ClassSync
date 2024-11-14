const { Router } = require("express");
const { handleGoogleLogin } = require("../controllers/user.controller");

const userRoutes = new Router();

userRoutes.post("/login", handleGoogleLogin);

module.exports = userRoutes;
