// Load required packages
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Define our lead schema
const LeadSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  mobile: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  location_type: {
    type: String,
  },
  location_string: {
    type: String,
  },
  status: {
    type: String,
  },
  communication: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

module.exports = mongoose.model("Lead", LeadSchema);
