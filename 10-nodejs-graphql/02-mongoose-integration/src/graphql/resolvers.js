const Product = require("../models/Product");

const resolvers = {
  Query: {
    products: async () => Product.find({}),
    product: async (_, { id }) => Product.findById(id),
  },

  Mutation: {
    createProduct: async (_, args) => {
      const newProduct = new Product(args);

      return await newProduct.save();
    },

    updateProduct: async (_, { id, ...updatedFields }) => {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        updatedFields,
        { new: true },
      );

      return updatedProduct;
    },

    deleteProduct: async (_, { id }) => {
      const deletedProduct = await Product.findByIdAndDelete(id);
      return !!deletedProduct;
    },
  },
};

module.exports = resolvers;
