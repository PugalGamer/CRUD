const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();
//middleware formats
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//mongodb connection
mongoose
  .connect("mongodb://localhost:27017/NODE-API")
  .then(() => {
    console.log("Connected");
    //set port number
    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch(() => {
    console.log("not connected");
  });

app.get("/", (req, res) => {
  res.send("hello api server node");
});
