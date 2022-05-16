const { Router } = require('express');
// const path = require("path");
const config = require("config");
const cookieParser = require("cookie-parser");

const router = new Router();

  
  router.get("/", (req, res) => {
    res.cookie("intro", true, { httpOnly: true });
    res.cookie(
      "username",
      cookieParser.signedCookie("Ted", config.get("cookieSecret")),
      {
        signed: true,
      }
    );
  
    // req.session.views = (req.session.views || 0) + 1;
  
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
    //if we set pug engine our res obj can use methode render put name of template not path
    res.render("pages/index");
  });
  
  router.get("/login", (req, res) => {
    console.log(req.signedCookies);
    const { intro } = req.cookies;
    res.render("pages/login", { intro });
  });
  
  router.get("/logout", (req, res) => {
    req.session.destroy();
    res.send('logged out');
  });

  module.exports = router;