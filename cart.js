// ======================================
// ADD TO CART
// ======================================

function addToCart(id){

    const product = products.find(item => item.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id === id);

    if(existingItem){

        existingItem.quantity++;

    }

    else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart.");

}
// ======================================
// CART COUNT
// ======================================

function updateCartCount(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item=>{

        totalItems += item.quantity;

    });

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.innerText = totalItems;

    }

}
updateCartCount();