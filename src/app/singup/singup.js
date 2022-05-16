const {Router} = require("express");

const singupRouter = new Router();

singupRouter.get("/", ( req, res )=>{
    res.render("pages/signup", {})
});

singupRouter.post("/", ( req, res )=>{
    //add body to request with middleware
    console.log(req.body,'kdkdkdk');
    req.session.auth = true;
    res.redirect('/')

    //if error send errror to template
    // res.render("pages/signup", {})
});

module.exports = singupRouter;