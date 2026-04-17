const express = require("express");
const app = express();
const mongoose = require("mongoose");

// creating api for our backend
app.get("/", (req, res) => {
    res.send("Hi, my friend api is working.");
})

app.listen(8080, () => {
    console.log("Server is ready my friend to port 8080.");
});