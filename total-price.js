const products = [
  { name: "laptop", price: 43000 },
  { name: "shirt", price: 500 },
  { name: "watch", price: 3680 },
  { name: "phone", price: 55000 },
];
let totalPrice = 0;
for (const product of products) {
  totalPrice += product.price;
}
//console.log(totalPrice);

let cartTotal = 0;
const cart = [
  { name: "laptop", price: 43000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 8 },
  { name: "watch", price: 3680, quantity: 3 },
  { name: "phone", price: 55000, quantity: 1 },
];

for (const product of cart) {
  const productTotal = product.price * product.quantity;
  cartTotal += productTotal;
}
console.log(cartTotal);
