// ======================================================
// Dukaan Vale
// products.js
// Complete Product Database
// ======================================================

const products = [

    // ======================================================
    // GROCERY
    // ======================================================

    {
        id: 3,
        category: "grocery",
        name: "Green Chilli",
        description: "Fresh Green Chilli",
        price: 28,
        oldPrice: 40,
        discount: "30%",
        rating: 4.8,
        stock: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPovMvLh1KtQ6YPBXuLQ11CWFKf8Ea1aiWRriW1dTGcydyduurqG9GqJjrXWxhlVgJqqiWyOy6f0KS0xZDC3dGDjWjzJYQG8UkC6ODZnV3Ew&s=10"
    },

    {
        id: 4,
        category: "grocery",
        name: "Fresh Spinach",
        description: "Organic Spinach",
        price: 30,
        oldPrice: 45,
        discount: "33%",
        rating: 4.6,
        stock: 35,
        image: "data:image/jpeg;base64,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"
    },

    {
        id: 5,
        category: "grocery",
        name: "Fresh Carrot",
        description: "Healthy Organic Carrots",
        price: 45,
        oldPrice: 60,
        discount: "25%",
        rating: 4.7,
        stock: 25,
        image: "data:image/jpeg;base64,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"
    },



    // ======================================================
    // FASHION
    // ======================================================

    {
        id: 101,
        category: "fashion",
        name: "Men Oversized T-Shirt",
        description: "Premium Cotton T-Shirt",
        price: 699,
        oldPrice: 999,
        discount: "30%",
        rating: 4.8,
        stock: 20,
        image: "https://nobero.com/cdn/shop/files/WhatsApp_Image_2024-08-13_at_6.50.45_PM.jpg?v=1768974515"
    },

    {
        id: 102,
        category: "fashion",
        name: "Women Kurti",
        description: "Printed Rayon Kurti",
        price: 899,
        oldPrice: 1299,
        discount: "31%",
        rating: 4.7,
        stock: 18,
        image: "https://clothsvilla.com/cdn/shop/files/blue-printed-rayon-kurti_1_1366x.jpg?v=1715690401"
    },

    {
        id: 103,
        category: "fashion",
        name: "Blue Jeans",
        description: "Slim Fit Denim",
        price: 1199,
        oldPrice: 1599,
        discount: "25%",
        rating: 4.6,
        stock: 22,
        image: "https://blanck.in/cdn/shop/files/BLW13-5.jpg?v=1774434472"
    },
    {
        id: 301,
        category: "fashion",
        name: "Face Wash",
        description: "Deep Clean Face Wash",
        price: 299,
        oldPrice: 499,
        discount: "40%",
        rating: 4.8,
        stock: 25,
        image: "https://imgs.search.brave.com/9SkYQFJQ8gNE0s8O5Iq7m2AHXNa7LuvGGtp4xJk88fc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVm/aWx0ZXJ5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/Mi9oeWdpZW5lbGFi/LWZhY2Utd2FzaC1y/ZXZpZXctb24tVGhl/LUZpbHRlcnktMTIw/MHg5MDAuanBn"
    },

    {
        id: 302,
        category: "fashion",
        name: "Lipstick",
        description: "Matte Long Lasting",
        price: 499,
        oldPrice: 699,
        discount: "28%",
        rating: 4.7,
        stock: 20,
        image: "https://imgs.search.brave.com/S9DOhXDl51WIh2NW0zy1kfVkA6cQHq3l0WFuAXy0g_s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NTEyLzcxMy9zbWFs/bC9hLWxpcHN0aWNr/LWlzLW5leHQtdG8t/YS1zbWVhci1vZi1s/aXBzdGljay1waG90/by5qcGc"
    },



    // ======================================================
    // ELECTRONICS
    // ======================================================

    {
        id: 201,
        category: "electronics",
        name: "Wireless Earbuds",
        description: "Bluetooth 5.3 Earbuds",
        price: 1499,
        oldPrice: 2499,
        discount: "40%",
        rating: 4.9,
        stock: 15,
        image: "https://www.gonoise.com/cdn/shop/files/1_68af1967-8a79-4516-9873-211acfe237e2.png?v=1724763666"
    },

    {
        id: 202,
        category: "electronics",
        name: "Smart Watch",
        description: "AMOLED Display",
        price: 2499,
        oldPrice: 3499,
        discount: "28%",
        rating: 4.8,
        stock: 12,
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shopsy-smartwatch/p/b/6/1-44-android-ios-t500-smart-watch-with-bluetooth-calling-black-original-imagvy24hyyqbzvm.jpeg?q=90"
    },
    {
        id: 203,
        category: "electronics",
        name: "Smart Watch",
        description: "AMOLED Display",
        price: 3499,
        oldPrice: 4499,
        discount: "28%",
        rating: 4.8,
        stock: 12,
        image: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF1000,1000_QL80_.jpg"
    },
];