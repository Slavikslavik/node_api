const { Router } = require("express");

const appRouter = new Router();

appRouter.use("/", require("./home/home"));
appRouter.use("/signup", require("./signup/signup"));
appRouter.use("/logout",require("./logout/logout"));
appRouter.use("/chats", require("./chats/chats"));
appRouter.use("/signin", require("./signin/signin"));
appRouter.use("/users", require("./users/users"));

module.exports = appRouter;