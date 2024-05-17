// Sample product data 
const products = [
    { id: 1, name: 'TV', price: 10000, image: 'TV image.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris id justo fringilla varius. Phasellus suscipit vitae ligula at suscipit. Vivamus ultrices turpis quis ultrices fringilla.' },
    { id: 2, name: 'Mobile', price: 20000, image: 'Mobile image.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris id justo fringilla varius. Phasellus suscipit vitae ligula at suscipit. Vivamus ultrices turpis quis ultrices fringilla.' },
    { id: 3, name: 'Laptop', price: 30000, image: 'laptop.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris id justo fringilla varius. Phasellus suscipit vitae ligula at suscipit. Vivamus ultrices turpis quis ultrices fringilla.' },
    { id: 4, name: 'Earphones', price: 2000, image: 'earPhones.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris id justo fringilla varius. Phasellus suscipit vitae ligula at suscipit. Vivamus ultrices turpis quis ultrices fringilla.' }
];

const productsContainer = document.getElementById('products-container');
const cartBtn = document.getElementById('cart-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const cartItems = document.getElementById('cart-items');
const cartPage = document.getElementById('cart-page');
const cartPageItems = document.getElementById('cart-page-items');
const totalPrice = document.getElementById('total-price');
const totalCartPrice = document.getElementById('total-cart-price');

// Function to toggle between pages
function togglePages() {
    productsContainer.style.display = productsContainer.style.display === 'none' ? 'block' : 'none';
    cartPage.style.display = cartPage.style.display === 'none' ? 'block' : 'none';
    backToHomeBtn.style.display = backToHomeBtn.style.display === 'none' ? 'block' : 'none';
}

// Show cart modal
cartBtn.onclick = function() {
    cartModal.style.display = 'block';
    togglePages(); // Show cart page
}

// Close cart modal
closeBtn.onclick = function() {
    cartModal.style.display = 'none';
    togglePages(); // Show product page
}

// Back to home button
backToHomeBtn.onclick = function() {
    togglePages(); // Show product page
}

// Render products
function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>${product.info}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = document.createElement('li');
    cartItem.textContent = `${product.name} - ₹${product.price}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
        cartItems.removeChild(cartItem);
        updateTotalCartPrice();
    };
    cartItem.appendChild(removeBtn);
    cartItems.appendChild(cartItem);
    updateTotalCartPrice();
}

// Update cart count
function updateCartCount() {
    cartBtn.textContent = `Show Cart (${cartItems.children.length})`;
}

// Render products on page load
renderProducts();
