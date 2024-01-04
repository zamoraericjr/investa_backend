import express from "express";
import productsController from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", productsController.getProducts);
productsRouter.post("/", productsController.addProduct);
productsRouter.delete("/:id", productsController.deleteProduct);
productsRouter.put("/:id", productsController.updateProduct);

export default productsRouter;