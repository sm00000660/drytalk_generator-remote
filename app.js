const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generatorDrytalk = require("./generator_drytalk");
const app = express();
const port = 3000;

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const option = req.body.target;
  const drytalk = generatorDrytalk(option);
  res.render("index", { drytalk: drytalk, option: option });
});

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`);
});
