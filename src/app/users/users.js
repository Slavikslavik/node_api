const { Router } = require("express");
const { itemsData } = require("../../services/index");

const usersRouter = new Router();

usersRouter.get("/", async (req, res) => {
  const { auth } = req.session;
  const users = await itemsData.getItems();
  res.render("pages/users", { auth, users });
});

module.exports = usersRouter;
