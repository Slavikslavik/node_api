const { Router } = require("express");
const { itemsData } = require("../../services/index");
const { signinValidation } = require("../../validations");

const signinRouter = new Router();

signinRouter.get("/", (req, res) => {
  res.render("pages/signin", { error: "", auth: null });
});

signinRouter.post("/", signinValidation.appValidator, async (req, res) => {

  const { error } = req.validation;
  if (error) {
    res.render("pages/signin", { error });
  } else {
    const { email, password } = req.body;
    const users = await itemsData.getItems();
    const list = users.find(
      (e) => e.email === email && e.password === password
    );
    if (list) {
      req.session.auth = true;
      res.redirect("/");
    } else {
      res.redirect("/signup");
    }
  }
});

module.exports = signinRouter;
