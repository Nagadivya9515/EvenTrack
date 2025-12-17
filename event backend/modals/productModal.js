import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: [
                "decor",
                "photography",
                "catering",
                "entertainment",
                "other"
            ],
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        priceType: {
            type: String,
            enum: ['fixed', 'per_person'],
            default: fixed
        },
        image: String,
        description: String,
        isActive: {
            type: Boolean,
            required: true
        }
    }, {timestamps: true}
);


export default mongoose.Model("product", ProductSchema);