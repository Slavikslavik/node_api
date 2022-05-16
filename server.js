const config = require("config");
// const router = require("./src/api/controllers.js");
const path = require("path");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const express = require("express");
// const express = require("express");
const bodyParser = require("body-parser");

const { appRouter } = require("./src");

const app = express();

const { port } = config.get("server");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "src", "views"));

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.set("trust proxy", 1);

app.use(
  session({
    secret: config.get("sessionSecret"),
    name: "sessionId",
    resave: false,
    saveUninitialized: true,
    // store: redis, npm connect-edis
  })
);

app.use("/", appRouter);

app.use("/assets", express.static(path.join("public", "assets")));

// //////
// app.set("trust proxy", 1);

// app.use(cookieParser(config.get("cookieSecret")));

// app.use("/", router);

// app.use("/assets", express.static(path.join("public", "assets")));

// app.use(
//   session({
//     secret: config.get("sessionSecret"),
//     name: "sessionId",
//     resave: false,
//     saveUninitialized: true,
//     // store: redis, npm connect-edis
//   })
// );

//////////
app.listen(port, () => {
  console.log(`init ${port}`);
});
