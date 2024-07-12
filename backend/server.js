require('dotenv').config()

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000

const connectDB = require("./config/db");
connectDB();

app.use(express.json({extended: false}))
app.use(cors())


app.get("/", (req, res) => {
    res.send("Server is Running")
})

app.listen(PORT, () =>{
    console.log(`Server is Running on PORT: ${PORT}`)
})