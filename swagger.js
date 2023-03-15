const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/api_doc/swagger.json";
const endpointsFiles = ["./src/routes/category.routes.js"];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require("./src/server.js");
});
