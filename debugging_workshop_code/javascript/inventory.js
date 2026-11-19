function reserveInventory(products, order) {
  for (const item of order.items) {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      if (product>0){
        product.stock -= order;
      }
    }
  }
}

function restockProduct(products, productId, amount) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    return null;
  }

  product.stock += amount;
  return product;
}

module.exports = {
  reserveInventory,
  restockProduct
};
