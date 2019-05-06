dataLayer.push({
  ecommerce: {
    purchase: {
      actionField: {
        id: "ID de la transaccion", // Transaction ID. Required for purchases and refunds.
        affiliation: "Online Store",
        revenue: "35.43", // Total transaction value (incl. tax and shipping)
        tax: "4.90",
        shipping: "5.99"
      },
      products: [
        {
          // List of productFieldObjects.
          name: "Nombre del producto", // Name or ID is required.
          id: "ID del producto",
          price: "15.25",
          category: "Categoria del producto",
          variant: "Color",
          quantity: 1
        },
        {
          name: "Nombre del producto",
          id: "ID del producto",
          price: "33.75",
          category: "Categoria del producto",
          variant: "Color del producto",
          quantity: 1
        }
      ]
    }
  }
});
