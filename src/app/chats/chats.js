const { Router } = require("express");

const chatsRouter = new Router();

chatsRouter.get("/", (req, res) => {
  res.render("pages/chats");
});

module.exports = chatsRouter;
