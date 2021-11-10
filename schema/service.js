const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
  service_name: { type: String, required: true },
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
