// ======================================
// LOAD WISHLIST
// ======================================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistContainer = document.getElementById("wishlist-items");
const emptyWishlist = document.getElementById("empty-wishlist");


// ======================================
// ADD TO WISHLIST
// ======================================

function addToWishlist(id){

    const product = products.find(item => item.id === id);

    const exists = wishlist.find(item => item.id === id);

    if(exists){

        alert("Product already in wishlist.");

        return;

    }

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

    alert(product.name + " added to Wishlist");

}


// ======================================
// DISPLAY WISHLIST
// ======================================

function displayWishlist(){

    if(!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if(wishlist.length === 0){

        document.querySelector(".cart-container").style.display = "none";

        emptyWishlist.style.display = "none";

        return;

    }

    document.querySelector(".cart-container").style.display = "flex";

    emptyWishlist.style.display = "block";

    wishlist.forEach(product=>{

        wishlistContainer.innerHTML += `

        <div class="cart-card">

            <img src="${product.image}">

            <div class="cart-info">

                <h3>${product.name}</h3>

                <p>${product.discount}</p>

                <div class="cart-price">

                    ₹${product.price}

                    <span>₹${product.oldPrice}</span>

                </div>

            </div>

            <button
                class="cart-btn"
                onclick="moveToCart(${product.id})">

                Move To Cart

            </button>

            <button
                class="remove-btn"
                onclick="removeWishlist(${product.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

}

displayWishlist();
// ======================================
// REMOVE FROM WISHLIST
// ======================================

function removeWishlist(id){

    wishlist = wishlist.filter(product => product.id !== id);

    saveWishlist();

}


// ======================================
// MOVE TO CART
// ======================================

function moveToCart(id){

    const product = wishlist.find(item => item.id === id);

    if(!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.id === id);

    if(exists){

        exists.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    removeWishlist(id);

    updateCartCount();

}


// ======================================
// SAVE WISHLIST
// ======================================

function saveWishlist(){

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();

    updateWishlistCount();

}


// ======================================
// WISHLIST COUNT
// ======================================

function updateWishlistCount(){

    const count = document.getElementById("wishlist-count");

    if(count){

        count.innerText = wishlist.length;

    }

}

updateWishlistCount();
