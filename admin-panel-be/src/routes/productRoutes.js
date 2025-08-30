import express from 'express';
import productController from '../controllers/productController.js';
import authMiddleware from '../middlewares/auth.js';

const productRouter = express.Router();

// Product Listing
productRouter.get('/', authMiddleware, productController.getProductList);

// Product Creation
productRouter.post('/', authMiddleware, productController.createProduct);

// Product Deletion
productRouter.delete('/:id', authMiddleware, productController.deleteProduct);

// Product Updation
productRouter.put('/:id', authMiddleware, productController.updateProduct);

export default productRouter;