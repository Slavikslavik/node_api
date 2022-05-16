const { Router } = require("express");

const appRouter = new Router();

appRouter.use("/", require("./home/home"));
appRouter.use("/signup", require("./singup/singup"));

module.exports = appRouter;