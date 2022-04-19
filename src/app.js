const express = require("express");

const app = express();

app.use(express.json());

const translateController = require("./controller/translate.controller");

app.use("/translateData", translateController);

const connect = require("./config/db");


const port = 1234
app.listen(port, async () => {
  await connect();

  console.log(`running on port ${port}`);
});
