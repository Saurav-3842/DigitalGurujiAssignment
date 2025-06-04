const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  userId: String,
  email: String,
  name: String,
});

module.exports = mongoose.model("Lead", LeadSchema);
