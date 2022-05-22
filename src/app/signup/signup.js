const { Router } = require("express");
const { itemsData } = require("../../services/index");
const { signupValidation } = require("../../validations");

const singupRouter = new Router();

singupRouter.get("/", (req, res) => {
  res.render("pages/signup", {error: ""});
});

singupRouter.post("/", signupValidation.appValidator, async (req, res) => {

  //if error send errror to template
  // res.render("pages/signup", {})
  const { error } = req.validation;
  if (error) {
    res.render("pages/signup", { error });
  } else {
    //add body to request with middleware
    req.session.auth = true;
    await itemsData.setItem(req.body)
    res.redirect("/");
  }
});

module.exports = singupRouter;
