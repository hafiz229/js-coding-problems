const phones = [
  { name: "samsung s5", price: 45000, camera: 10, stroage: 32 },
  { name: "xiaomi a2", price: 15000, camera: 8, stroage: 64 },
  { name: "walton primo", price: 12000, camera: 10, stroage: 16 },
  { name: "oppo a2", price: 17000, camera: 8, stroage: 8 },
  { name: "nokia n95", price: 8000, camera: 10, stroage: 4 },
  { name: "htc h81", price: 25000, camera: 8, stroage: 16 },
];

let cheapest = phones[0];
for (const phone of phones) {
  // compare price only
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
