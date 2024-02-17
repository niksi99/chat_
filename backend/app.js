require("dotenv").config();
const express = require('express');
const MongoDB_Connection = require("./server/config/db/MongoDB");
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 1111;

MongoDB_Connection();

const authRoute = require("./server/routes/AuthRoute");

app.use("/auth", authRoute);

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})

app.get("/", (req, res) => {
    res.send("rwljuh")
})