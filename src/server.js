const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const path = require("path");
require("./database");

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.use("/files", express.static(path.resolve(__dirname, "uploads")));

app.listen(5000, () => {
  console.log("server is running");
});
