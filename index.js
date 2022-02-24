require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/routes");

const hostname = "localhost";
const port = 8900;

const app = express();

app.use(express.json());

app.use("/", router);

mongoose
  .connect(process.env.URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((client) => {
    app.listen(port, hostname, () => {
      console.log(`Server is running on http://${hostname}:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
