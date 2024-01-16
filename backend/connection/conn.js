const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbDuaa:dbDuaa@cluster0.64nwzll.mongodb.net/BookStore?retryWrites=true&w=majority")
.then(console.log(`Mongo Cluster DataBase Connected`))
.catch((e) => console.log("error oops!", e));
