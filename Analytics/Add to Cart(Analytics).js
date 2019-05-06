ga("create", "UA-XXXXX-Y");
ga("require", "ec");
ga("ec:addProduct", {
  id: "9bdd2",
  name: "Compton T-Shirt",
  price: "44.00",
  brand: "Compton",
  category: "T-Shirts",
  variant: "red",
  dimension1: "M",
  position: 0,
  quantity: 1
});
ga("ec:setAction", "add");
ga("send", "event", "detail view", "click", "addToCart");
