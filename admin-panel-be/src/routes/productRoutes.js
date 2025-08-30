import express from 'express';
import { getProductList, createProduct, deleteProduct, updateProduct } from '../controllers/productController.js';
import authMiddleware from '../middlewares/auth.js';

const productRouter = express.Router();

// Product Listing
productRouter.get('/', authMiddleware, getProductList);

// Product Creation
productRouter.post('/', authMiddleware, createProduct);

// Product Deletion
productRouter.delete('/:id', authMiddleware, deleteProduct);

// Product Updation
productRouter.put('/:id', authMiddleware, updateProduct);

export default productRouter;