require("dotenv").config();
const express = require('express');
const MongoDB_Connection = require("./server/config/db/MongoDB");
const app = express();

const PORT = process.env.PORT || 1111;

MongoDB_Connection();

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})

app.get("/", (req, res) => {
    res.send("rwljuh")
})
