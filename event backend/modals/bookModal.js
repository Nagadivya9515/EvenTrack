// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
    default: null
  },

  services: [
    {
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
      },
      price: Number,
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],

  eventType: {
    type: String,
    required: true
  },

  guestCount: Number,

  eventDate: {
    type: Date,
    required: true
  },

  eventTime: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  totalAmount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: [
      "pending",
      "approved",
      "assigned",
      "completed",
      "cancelled"
    ],
    default: "pending"
  },

  assignedProviders: [
    {
      name: String,
      phone: String,
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
      }
    }
  ]

}, { timestamps: true });

export default mongoose.model("booking", bookingSchema);
