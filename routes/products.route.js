import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controller/products.controller.js";

// Create a new router for products
export const productsRouter = express.Router();

// Define routes for the products API
productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getProductById);

productsRouter.post("/", createProduct);

productsRouter.put("/:id", updateProduct);

productsRouter.delete("/:id", deleteProduct);
