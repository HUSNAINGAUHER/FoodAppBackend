const mongoose = require("mongoose");

const DistributionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Distribution = mongoose.model("Department", DistributionSchema);

module.exports = Distribution;
