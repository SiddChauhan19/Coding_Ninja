const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.
// mongoose.connect("mongodb+srv://employee-system-user:employee-system-password@employee-system-0.o4qxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
const DB = ("mongodb+srv://siddhant1952000:xizBaM8aIqOWN1Lm@cluster0.rdaeui9.mongodb.net/?retryWrites=true&w=majority")

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind('Error connecting to the DB'));

db.once("open", function () {
  console.log("Sucessfully connected to the DB");
});

// exporting the connection.
module.exports = db;
