const express = require ("express");
const app = express();

app.set("view engine", "ejs");

require("./routes/produtos")(app);

module.exports = app;
