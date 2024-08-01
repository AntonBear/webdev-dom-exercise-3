const books = [
  {
    title: 'Искусство программирования',
    price: 1300,
  },
  {
    title: 'Тихо!',
    price: 700,
  },
  {
    title: 'Ночной дозор',
    price: 980,
  },
]

let totalPrice = 0

for (let item of books) {
  totalPrice = totalPrice + item.price
}
console.log(totalPrice)

const list = books
  .map((item) => {
    return item.title
  })
  .join(', ')
console.log(list)
