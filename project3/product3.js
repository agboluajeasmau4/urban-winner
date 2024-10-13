// Shopping cart functionality
let cart = [];
let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.querySelector('.cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.closest('.product-item').dataset.id;
            addProductToCart(productId);
        });
    });

    function addProductToCart(productId) {
        cart.push(productId);
        cartCount++;
        cartCountElement.textContent = cartCount;
        updateCartDisplay();
    }

    function updateCartDisplay() {
        if (cart.length > 0) {
            cartItemsElement.innerHTML = '';
            cart.forEach((item, index) => {
                cartItemsElement.innerHTML += `<p>Product ${item} <button onclick="removeFromCart(${index})">Remove</button></p>`;
            });
        } else {
            cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
        }
    }

    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        cartCount = 0;
        cartCountElement.textContent = cartCount;
        updateCartDisplay();
    });
});

function removeFromCart(index) {
    cart.splice(index, 1);
    cartCount--;
    document.getElementById('cart-count').textContent = cartCount;
    document.querySelector('.cart-items').innerHTML = '';
    cart.forEach((item, index) => {
        document.querySelector('.cart-items').innerHTML += `<p>Product ${item} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
    if (cart.length === 0) {
        document.querySelector('.cart-items').innerHTML = '<p>Your cart is empty.</p>';
    }
}
