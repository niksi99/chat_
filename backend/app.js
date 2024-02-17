require("dotenv").config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 1111;
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})

app.get("/", (req, res) => {
    res.send("rwljuh")
})
