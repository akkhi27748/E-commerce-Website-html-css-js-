'use strict'
// Function to fetch products from the fake API


// Function to display products on the UI
function displayProducts() {
    const products = {
        
    }
  const productsContainer = document.getElementById("productsContainer");

  // Clear any existing content in the container
  productsContainer.innerHTML = "";

  // products.forEach((product) => {
  products.forEach(function (product) {
    // Create Bootstrap card element
    var productCard = document.createElement("div");
    productCard.classList.add("col-md-3", "mb-3"); // Adjust column width and margins as needed

    productCard.innerHTML = `
            <div class="card" style:"width : 18rem; height: 40vh;">
                <img src="${product.thumbnail}" class="card-img-top img-fluid pro-img" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title pro-name">${product.title}</h5>
                    <p class="card-text">Price: ₹${product.price}</p>
                    <p class="card-text">${product.description}</p>
                    <!-- Add more product details or buttons as needed -->
                    <button onclick="buyNow(${product.id})" class="card-link btn btn-outline-success">Buy Now</button>
                    <button onclick="addToCart(${product.id})" class="card-link btn btn-outline-primary">Add to Cart</button>

                </div>
            </div>
        `;

    // Append each product card to the products container
    productsContainer.appendChild(productCard);
  });
}

// Call the function to fetch and display products when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});
