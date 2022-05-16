const {Router} = require("express");

const homeRouter = new Router();

homeRouter.get("/", ( req, res )=>{
    const { auth } = req.session;
    console.log(auth,'auth');
    //and send auth to our template
    res.render("pages/index", { auth })
});

homeRouter.post("/", ( req, res )=>{
    res.render("pages/index", {})
});

module.exports = homeRouter;