const mongoose = require("mongoose");

username = "tacto";
password = "tacto";

var dbURI = "mongodb+srv://"+username+":"+password+"@cluster0-nunm1.mongodb.net/AddressCollection";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
