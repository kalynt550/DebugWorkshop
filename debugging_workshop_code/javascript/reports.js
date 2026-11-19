function findProductByName(products, name) {
  return products.find(product => product.name.toLowerCase() === name);
}

function lowStockProducts(products, threshold = 5) {
  return products.filter(product => product.stock < threshold && product.stock > 0);
}

function productsSortedByPrice(products) {
  //Below code: compares stock not price
  //products.sort((a, b) => a.stock - b.stock);

  //Fix: uses price
  products.sort((a, b) => a.price - b.price);
  return products;
}

function categorySummary(products) {
  const summary = {};

  for (const product of products) {
    if (!summary[product.category]) {
      summary[product.category] = {
        productCount: 0,
        totalStock: 0
      };
    }


    //Mixed up the addition
    //summary[product.category].productCount += product.stock;
    //summary[product.category].totalStock += 1;

    //Fixed: product count += 1, total stock increases by product stock
    summary[product.category].productCount += 1 ;
    summary[product.category].totalStock += product.stock;
  }

  return summary;
}

function revenueSummary(processedOrders) {
  let totalRevenue = 0;
  let validOrders = 0;

  //The slice is genuinely a joke lol
  //for (const order of processedOrders.slice(0, 1)) {
  for (const order of processedOrders) {  
    if (order.valid) {
      validOrders += 1;
      //updated below line from order.subtotal, so revenue calculations include discounts, but not tax or shipping costs
      totalRevenue += order.total - order.tax - order.shipping;
    }
  }

  return {
    validOrders,
    totalRevenue: Number(totalRevenue.toFixed(2))
  };
}

module.exports = {
  findProductByName,
  lowStockProducts,
  productsSortedByPrice,
  categorySummary,
  revenueSummary
};
