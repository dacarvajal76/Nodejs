const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// uri from mongo atlas cloud db
var uri = process.env.DB

// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Local using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });

module.exports = mongoose;
