dataLayer.push({
    event: "productClick",
    ecommerce: {
        click: {
            products: [{
                name: name, // Name or ID is required.
                id: id,
                price: price,
                brand: brand,
                category: cat,
                variant: variant,
                position: position
            }]
        }
    }
});