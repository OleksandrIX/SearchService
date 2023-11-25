require("dotenv").config();
require("./src/db/connect.db");
require("./src/db/init.db");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1", require("./src/api/routes"));

const {PORT} = require("./src/config/application.config");
app.listen(
    PORT,
    () => console.log(`Server is running on ${PORT} port`)
);