const { Router } = require("express");
const userRoutes  = require("./user.routes");
const courseRoutes = require("./course.routes");

const router = new Router();

router.use("/user", userRoutes);

router.use("/course", courseRoutes);

module.exports = router ;
