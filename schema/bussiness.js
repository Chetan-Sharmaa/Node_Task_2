const mongoose = require("mongoose");

const { Schema } = mongoose;

const bussinessSchema = new Schema({
  business_name: { type: String, required: true },
  business_unique_tag: { type: String, required: true },
});

const Bussiness = mongoose.model("bussiness", bussinessSchema);

module.exports = Bussiness;
