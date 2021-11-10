const mongoose = require("mongoose");

const { Schema } = mongoose;

const subServiceSchema = new Schema({
  sub_service_name: { type: String, required: true },
});

const SubService = mongoose.model("subService", subServiceSchema);

module.exports = SubService;
