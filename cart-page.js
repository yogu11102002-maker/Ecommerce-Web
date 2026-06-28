// ======================================
// LOAD CART
// ======================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");
const emptyCart = document.getElementById("empty-cart");


// ======================================
// DISPLAY CART
// ======================================

function displayCart() {

    // Agar page par cart section nahi hai to kuch mat karo
    if (!cartItems) return;

    cartItems.innerHTML = "";

    // Empty cart
    if (cart.length === 0) {

        document.querySelector(".cart-container").style.display = "none";

        emptyCart.style.display = "block";

        return;
    }

    // Cart show
    document.querySelector(".cart-container").style.display = "flex";

    emptyCart.style.display = "none";

    cart.forEach(item => {

        cartItems.innerHTML += `

        <div class="cart-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>${item.discount}</p>

                <div class="cart-price">

                    ₹${item.price}

                    <span>₹${item.oldPrice}</span>

                </div>

            </div>

            <div class="cart-quantity">

                <button onclick="decreaseQuantity(${item.id})">-</button>

                <span>

                    ${item.quantity}

                </span>

                <button onclick="increaseQuantity(${item.id})">

                    +

                </button>

            </div>

            <button class="remove-btn"
                onclick="removeItem(${item.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });
    
    updateTotal();

}


// ======================================
// UPDATE TOTAL
// ======================================

function updateTotal() {

    let sub = 0;

    cart.forEach(item => {

        sub += item.price * item.quantity;

    });

    subtotal.innerText = "₹" + sub;

    total.innerText = "₹" + sub;

}


// First Time Load

displayCart();

// ======================================
// INCREASE QUANTITY
// ======================================

function increaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (item) {

        item.quantity++;

        saveCart();

    }

}


// ======================================
// DECREASE QUANTITY
// ======================================

function decreaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart = cart.filter(product => product.id !== id);

    }

    saveCart();

}


// ======================================
// REMOVE PRODUCT
// ======================================

function removeItem(id) {

    cart = cart.filter(product => product.id !== id);

    saveCart();

}


// ======================================
// SAVE CART
// ======================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();

}
// ======================================
// PLACE ORDER
// ======================================

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    alert("🎉 Order Placed Successfully!\n\nThank you for shopping with Dukaan Vale.");

    localStorage.removeItem("cart");

    cart = [];

    updateCartCount();

    displayCart();

}