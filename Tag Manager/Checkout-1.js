dataLayer.push({
  event: "checkout",
  ecommerce: {
    checkout: {
      actionField: {
        step: 1
      },
      products: [
        {
          id: "ID del producto",
          name: "Nombre del producto",
          price: "16.00",
          category: "Categoria del prodcuto",
          variant: "Color del producto",
          dimension1: "Talle del producto",
          position: 0,
          quantity: 1
        },
        {
          id: "ID del producto",
          name: "Nombre del producto",
          price: "17.00",
          category: "Categoria del prodcuto",
          variant: "Color del producto",
          dimension1: "Talle del producto",
          position: 1,
          quantity: 1
        }
      ]
    }
  }
});
