import Product from "../models/productModel.js";

export const getProductList = async (req, res, next) => {
  try {
    const productLists = await Product.find();
    res.status(200).json(productLists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const { title, description, price, image } = req.body;
    const isProductExist = await Product.findOne({ title });
    if (isProductExist) {
      return res.status(400).json({ message: 'Product already exist' });
    }

    const product = await Product.create({
      title,
      description,
      price,
      image,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { title, description, price, image } = req.body;
    const product = await Product.findByIdAndUpdate(productId, {
      title,
      description,
      price,
      image,
    }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}