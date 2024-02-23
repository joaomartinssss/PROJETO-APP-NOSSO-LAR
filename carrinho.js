function hideCart() {
  const carrinhoPrevisão = document.getElementById("carrinho-previsao");
  carrinhoPrevisão.style.display = "none";
}

const hideButton = document.getElementById("hide-button");
hideButton.addEventListener("click", hideCart);

function showCart() {
  const carrinhoPrevisão = document.getElementById("carrinho-previsao");
  carrinhoPrevisão.style.display = "block";
}

const cartButton = document.getElementById("cart-button");
cartButton.addEventListener("click", showCart);
