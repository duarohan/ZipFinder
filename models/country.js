const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = Promise; 

const countrySchema = new Schema({
id: Number,
sortname: String,
name: String,
phoneCode: Number
});

module.exports = mongoose.model("country", countrySchema);
