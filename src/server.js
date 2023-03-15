const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("./database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.listen(5000, () => {
  console.log("server is running");
});
