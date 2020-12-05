const db = require('../../models');
const Product = db.product;

module.exports = {
  createProduct: async () => {
    const payload = {
        name: "TestBuku",
        desc: "TestDesc",
        method: "Point"
    }
    let product = await Product.findOne({
      where: { name: payload.name }
    });
    if (!product) {
      product = await Product.create(payload);
      await product.save();
    }
    // const token = user.generateAuthToken(user);
    return { product };
  }
}