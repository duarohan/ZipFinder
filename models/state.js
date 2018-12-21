const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
id : String,
name : String,
country_id : String
});

module.exports = mongoose.model("state", stateSchema);
