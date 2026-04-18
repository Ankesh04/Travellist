const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")

// creatings database
const MONGO_URL = "mongodb://127.0.0.1:27017/travellist";
main().then(() => {
    console.log("My friend database is connected");
})
.catch(err => {
    console.log("My friend there is some error connecting database")
    console.log(err);
})//till here we are not connected to mongodb

async function main() {
    await mongoose.connect(MONGO_URL)
}

// creating api for our backend
app.get("/", (req, res) => {
    res.send("Hi, my friend api is working.");
});

// creating new route
app.get("/testListing", async (req, res) => {
    // creating a  sample list for a model
    let sampleListing = new Listing({
        title: "My home",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("Testing successful")
});

app.listen(8080, () => {
    console.log("Server is ready my friend to port 8080.");
});