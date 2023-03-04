const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db
require("./dbs/init.mongodb");
const { countConnect } = require("./helpers/check.connect");

//init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello Factips";

  return res.status(200).json({
    message: "Welcome Fantipsjs",
    metadata: strCompress.repeat(10000),
  });
});

//handling error

module.exports = app;
