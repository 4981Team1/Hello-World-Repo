const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/VotesDB", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

app.use(express.json());

const votesRouter = require("./routes/votes");
app.use("/votes", votesRouter);

app.get('/', function (req, res) {
  res.send('Hello World from NodeJS')
});

app.listen(3000);