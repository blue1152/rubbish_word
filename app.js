const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generateRubbish = require("./generator");
const app = express();
const port = 3000;

// setting view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const rubbishWord = generateRubbish(options);
  const none = "請先選擇職業，才能產生幹話喔～";
  res.render("index", {
    rubbishWord,
    options,
    helpers: {
      check_up: function() {
        if (rubbishWord == false) {
          return none;
        }
      }
    }
  });
});

// listening
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});
