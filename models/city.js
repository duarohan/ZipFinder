const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
id : String,
name : String,
state_id : String
});

module.exports = mongoose.model("city", citySchema);
