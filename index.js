const express = require('express')
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3500

app.use(express.json());

// importing routes
const blogRoutes = require('./routes/blog');

// mount the api routes
app.use("/api/v1", blogRoutes)

// start server
app.listen(PORT, () => {
    console.log("server started")
})

// DB connection
const dbconnect = require("./config/database")
dbconnect()

app.get("/", (req, res) => {
    res.send(`<h1>This is homepage</h1>`)

} )