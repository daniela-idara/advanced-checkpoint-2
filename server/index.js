/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const carRoutes = require("./Routes/CarRoutes");

const app = express();


mongoose.Promise = global.Promise;
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb+srv://" + process.env.mongodburi, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database Success!");
});

app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(carRoutes);
