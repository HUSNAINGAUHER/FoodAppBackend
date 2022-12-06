const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    invoice: {
      type: Number,
      required: false,
    },
    cart: [{}],
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },

    shippingOption: {
      type: String,
      required: false,
    },

    status: {
      type: String,
      enum: ["Pending", "Processing", "Delivered"],
    },
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order ||
  mongoose.model(
    "Order",
    orderSchema.plugin(AutoIncrement, {
      inc_field: "invoice",
      start_seq: 10000,
    })
  );
module.exports = Order;
