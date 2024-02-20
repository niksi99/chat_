require("dotenv").config();
const express = require('express');
const MongoDB_Connection = require("./server/config/db/MongoDB");
const morgan = require('morgan');
const cookieParser = require("cookie-parser")
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.use(cookieParser());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['*'],
}))

const PORT = process.env.PORT || 1111;

MongoDB_Connection();

const authRoute = require("./server/routes/AuthRoute");
const chatRoute = require("./server/routes/ChatRoute")
const userRoute = require("./server/routes/UserRoute")

app.use("/auth", authRoute);
app.use("/chat", chatRoute);
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})

app.get("/", (req, res) => {
    res.send("rwljuh")
})