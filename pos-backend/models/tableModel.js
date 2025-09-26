const moongoose = require("mongoose");

const tableSchema = new moongoose.Schema({
  tableNo: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "Available",
  },
  seats: {
    type: Number,
    required: true,
  },
  currentOrder: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
});

module.exports = moongoose.model("Table", tableSchema);
