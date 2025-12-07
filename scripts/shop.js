const products = [
  { name: "Держатель для благовоний", price: 569, id: 1, quantity: 1,},
  { name: "Ароматическая палка", price: 200, id: 2, quantity: 1,},
  { name: "Коврик для занятий йогой", price: 679, id: 3, quantity: 1, },
  { name: "Ароматические свечи", price: 1344, id: 4, quantity: 1, },
  { name: "Статуэтка будды", price: 988, id: 5, quantity: 1, },
  { name: "Дымный фонтан", price: 1790, id: 6, quantity: 1,},
  { name: "Ароматические палочки", price: 300, id: 7, quantity: 1,},
  { name: "Камни для медитации", price: 50, id: 8, quantity: 1,},
  { name: "Пачка ромашкового чая", price: 238, id: 9, quantity: 1,},
  { name: "Пачка вишневого пуэра", price: 340, id: 10, quantity: 1,},
  { name: "Пачка чёрного чая", price: 135, id: 11, quantity: 1,},
  { name: "Музыкальный плеер", price: 2500, id: 12, quantity: 1,},
  { name: "Саундхилинг (инструмент)", price: 1280, id: 13, quantity: 1,},
  { name: "Сад камней для медитации", price: 1350, id: 14, quantity: 1,},
  { name: "Рельефный коврик", price: 999, id: 15, quantity: 1,},
];

let cart = []

const productsHTML = products.map(
  (product) => `<div class="product-card">
        <h2 class="product-name">${product.name}</h2>
        <strong>${product.price} руб</strong>
        <button class="product-btn button1" id=${product.id}>Добавить в корзину</button>
    </div>`
);
const result = document.querySelector(".result");
result.innerHTML = productsHTML.join("");


function updateCart() {
  const cartHTML = cart.map(
    (item) => `<div class="cart-item">
            <h3>${item.name}</h3>
            <div class="cart-detail"><div class="mid">
                <button class="button1" onclick={decrItem(${item.id})}>-</button>
                <p>${item.quantity}</p>
                <button class="button1" onclick={incrItem(${item.id})}>+</button>
            </div>
            <p>${item.price} руб</p>
            <button onclick={deleteItem(${item.id})} class="cart-product button1" id=${item.id}><i class="fa fa-trash-o" aria-hidden="true"></i></button></div>
           </div>`
  );

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = cartHTML.join("");
}

let num = document.querySelectorAll(".product-btn").length;
for (let i = 0; i < num; i++) {
  document
    .querySelectorAll(".product-btn")
  [i].addEventListener("click", function (e) {
    addToCart(products, parseInt(e.target.id));
  });
}

function addToCart(products, id){
  const product = products.find((product) => product.id === id);
  const cartProduct = cart.find((product) => product.id === id);
  if (cartProduct != undefined && product.id == cartProduct.id) {
    incrItem(id);
  } else {
    cart.unshift(product);
  }
  updateCart();
  getTotal(cart);
};

function getTotal(cart) {
  let { totalItem, cartTotal } = cart.reduce(
    (total, cartItem) => {
      total.cartTotal += cartItem.price * cartItem.quantity;
      total.totalItem += cartItem.quantity;
      return total;
    },
    { totalItem: 0, cartTotal: 0 }
  );
  const totalItemsHTML = document.querySelector(".noOfItems");
  totalItemsHTML.innerHTML = `Количество: ${totalItem}`;
  const totalAmountHTML = document.querySelector(".total");
  totalAmountHTML.innerHTML = `${cartTotal} руб`;
}

function incrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] && cart[i].id == id) {
      cart[i].quantity += 1;
    }
  }
  updateCart();
  getTotal(cart);
}

function decrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].quantity > 1) {
      cart[i].quantity -= 1;
    }
  }
  updateCart();
  getTotal(cart);
}

function deleteItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = 1;
      cart.splice(i, 1);
    }
  }
  updateCart();
  getTotal(cart);
}