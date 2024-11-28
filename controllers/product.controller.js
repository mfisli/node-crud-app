import Product from "../models/product.model.js";

export const getProductList = async (req, res) => {
    try {
        const list = await Product.find({});
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Product.findById(id);
        if (!item) {
            res.status(404).json({ message: "Product not found."})
        } else {
            res.status(200).json(item);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const found = await Product.findByIdAndUpdate(id, req.body);
        if (!found) {
            res.status(404).json({ message: "Product not found."})
        } else {
            const updated = await Product.findById(id);
            res.status(200).json(updated);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const found = await Product.findByIdAndDelete(id);
        if (!found) {
            res.status(404).json({ message: "Product not found"});
        } else {
            res.status(200).json({ message: "Deleted product" + id });
        }
    }  catch (error) {
        res.status(500).json({ message: error.message });
    }
};