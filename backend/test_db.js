const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB_URL;
console.log("Testing connection to:", mongoUrl);

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Connected successfully!");
        process.exit(0);
    })
    .catch((err) => {
        console.error("Connection failed:", err);
        process.exit(1);
    });
