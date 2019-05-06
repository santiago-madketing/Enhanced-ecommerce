dataLayer.push({
  ecommerce: {
    purchase: {
      actionField: {
        id: "T12345", // Transaction ID. Required for purchases and refunds.
        affiliation: "Online Store",
        revenue: "35.43", // Total transaction value (incl. tax and shipping)
        tax: "4.90",
        shipping: "5.99"
      },
      products: [
        {
          // List of productFieldObjects.
          name: "Triblend Android T-Shirt", // Name or ID is required.
          id: "12345",
          price: "15.25",
          brand: "Google",
          category: "Apparel",
          variant: "Gray",
          quantity: 1
        },
        {
          name: "Donut Friday Scented T-Shirt",
          id: "67890",
          price: "33.75",
          brand: "Google",
          category: "Apparel",
          variant: "Black",
          quantity: 1
        }
      ]
    }
  }
});
