import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
      default: 0,
    },
    quantity: {
      type: Number,
      required: [true, "product quantity is required"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create the product model
// This model will be used to interact with the products collection in MongoDB
export const Product = mongoose.model("Product", productSchema);
