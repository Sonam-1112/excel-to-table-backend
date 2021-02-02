const mongoose = require("mongoose");

//Inserting data
const Schema = mongoose.Schema;

//Create Schema
const StudentSchema = new Schema({
  name: {
    type: String
  },
  roll_no: {
    type: String
  },
  class: { type: Number },
});

module.exports = Item = mongoose.model("students", StudentSchema);