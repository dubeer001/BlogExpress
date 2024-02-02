const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const blogRouter = require("./routes/blog");
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, "static")));
app.use("/", blogRouter);
app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});
