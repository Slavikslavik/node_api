const { Router } = require("express");

const logoutRouter = new Router();

logoutRouter.get("/", (req, res) => {
    req.session.auth = null;
    res.redirect("/");
});

module.exports = logoutRouter;
