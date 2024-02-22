function adicionarProduto(id, nome, preco, imagem) {
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  const productImage = document.createElement("img");
  productImage.src = imagem;
  productImage.alt = nome;
  productImage.className = "product-image";

  const productInfo = document.createElement("div");
  productInfo.className = "product-info";

  const productName = document.createElement("p");
  productName.className = "product-name";
  productName.textContent = nome;

  const addButton = document.createElement("button");
  addButton.className = "add-button";
  addButton.textContent = "Adicionar";
  addButton.dataset.produtoId = id;

  const productPrice = document.createElement("p");
  productPrice.className = "product-price";
  productPrice.textContent = preco;

  productInfo.appendChild(productName);
  productInfo.appendChild(productPrice);
  productContainer.appendChild(productImage);
  productContainer.appendChild(productInfo);
  productContainer.appendChild(addButton);

  const botaoDosProdutos = document.querySelector(".product-container");
  botaoDosProdutos.appendChild(productContainer);

  addButton.addEventListener("click", () => {
    adicionarProdutoAoCarrinho(id);
  });
}

function adicionarProdutos() {
  // Utilize a função adicionarProduto para adicionar produtos usando um loop ou métodos como forEach ou map
}

function adicionarProdutoAoCarrinho(id) {
  // Código para adicionar o produto com o ID especificado ao carrinho
}

// Chame a função adicionarProdutos para adicionar os produtos desejados
// ou chame a função adicionarProduto individualmente para cada produto

// Exemplo de chamada da função adicionarProduto:
adicionarProduto(1, "Contra-filé Friboi", "R$50,00", "contra-file friboi.webp");
adicionarProduto(2, "Contra-filé Friboi", "R$50,00", "contra-file friboi.webp");
adicionarProduto(3, "Contra-filé Friboi", "R$50,00", "contra-file friboi.webp");
adicionarProduto(4, "Contra-filé Friboi", "R$50,00", "contra-file friboi.webp");

adicionarProduto(5, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(6, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(7, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(8, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(9, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(10, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(11, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(12, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(13, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(14, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(15, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(16, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(17, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(18, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(19, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(20, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(21, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(22, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
adicionarProduto(23, "Picanha Bovina Friboi", "R$ 30,00", "picanha friboi.webp");
