const mongoose = require("mongoose");

const DistributionSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: false,
  },
  limit: {
    type: Number,
    required: true,
  },
});

const Distribution = mongoose.model("Distribution", DistributionSchema);

module.exports = Distribution;
