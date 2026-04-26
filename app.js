const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path"); // ejs setup
const MONGO_URL = "mongodb://127.0.0.1:27017/travellist"; // creatings database
const methodOverride = require("method-override"); //for updating

main()
  .then(() => {
    console.log("My friend database is connected");
  })
  .catch((err) => {
    console.log("My friend there is some error connecting database");
    console.log(err);
  }); //till here we are not connected to mongodb

async function main() {
  await mongoose.connect(MONGO_URL);
}

// connecting to ejs
app.set("view Engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// creating api for our backend
app.get("/", (req, res) => {
  res.send("Hi, my friend api is working.");
});

// new index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// New route- to add new listings
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// show route-show all data
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const showAllListing = await Listing.findById(id);
  res.render("listings/show.ejs", { showAllListing });
});

// Create Route- to add the user input
app.post("/listings", async (req, res) => {
  // let {title, description, image, price, country, location} = req.body;
  // let listing = req.body.listing;
  // console.log(listing);
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const showAllListing = await Listing.findById(id);
  res.render("listings/edit.ejs", { showAllListing });
  // as value of the id have to send to edit
});

//Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
})

// creating new route for testing
// app.get("/testListing", async (req, res) => {
//     // creating a  sample list for a model
//     let sampleListing = new Listing({
//         title: "My home",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Testing successful")
// });

app.listen(8080, () => {
  console.log("Server is ready my friend to port 8080.");
});
