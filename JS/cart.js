// Sample products data (can be fetched from an API or elsewhere)
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  // Add more product items as needed
];

// Initialize an empty cart
let cart = [];

// Function to add items to the cart
function addToCart(productId) {
  const productToAdd = products.find((product) => product.id === productId);
  if (productToAdd) {
    cart.push({ ...productToAdd, quantity: 1 });
    renderCart();
  }
}

// Function to remove items from the cart
function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

// Function to calculate total price
function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to render cart items and total
function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalContainer = document.getElementById("cartTotal");

  // Clear previous content
  cartItemsContainer.innerHTML = "";

  // Render cart items
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>Price: $${item.price}</span>
      <span>Quantity: ${item.quantity}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  // Calculate and render total price
  const total = calculateTotal();
  cartTotalContainer.innerHTML = `Total: $${total}`;
}

// Example: Add a product to the cart (using product ID)
addToCart(1);


document.addEventListener("DOMContentLoaded", () => {
  const decreaseButtons = document.querySelectorAll(".decrease-btn");
  const increaseButtons = document.querySelectorAll(".increase-btn");

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quantityElement = button.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
      }
      // Handle logic to update the cart or total amount
      // You can trigger an update or send data to a backend here
    });
  });

  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quantityElement = button.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      // Handle logic to update the cart or total amount
      // You can trigger an update or send data to a backend here
    });
  });
});
