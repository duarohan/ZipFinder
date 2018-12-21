const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
id: Number,
sortname: String,
name: String,
phoneCode: Number
});

module.exports = mongoose.model("country", countrySchema);
