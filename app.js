const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static("public"));

const inDevlopment = true;

const devPath = path.join(__dirname, "/config/environment/dev.env");
const prodPath = path.join(__dirname, "/config/environment/prod.env");

if (inDevlopment) {
  dotenv.config({ path: devPath });
} else {
  dotenv.config({ path: prodPath });
}

const bussinessRoutes = express.Router();
app.use("/task", bussinessRoutes);
require("./routes/bussiness.Routes")(bussinessRoutes);
require("./config/database/connections");

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log("server start running on " + PORT);
});
