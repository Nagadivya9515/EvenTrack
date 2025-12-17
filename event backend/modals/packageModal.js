// models/Package.js
import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    enum: [
      "birthday",
      "wedding",
      "anniversary",
      "baby_shower",
      "newborn",
      "house_warming"
    ],
    required: true
  },
  services: [
    {
      serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  basePrice: {
    type: Number,
    required: true
  },
  image: String,
  description: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export default mongoose.model("Package", packageSchema);
