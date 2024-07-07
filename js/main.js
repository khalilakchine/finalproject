// Define products data
const products = [
    { 
        id: 1, 
        name: 'Beer 1', 
        price: 10, 
        image: 'images/product1.jpg', 
        description: 'This is Beer 1. A refreshing lager with a crisp taste and a hint of citrus.',
        details: 'Details about Beer 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut urna.'
    },
    { 
        id: 2, 
        name: 'Beer 2', 
        price: 12, 
        image: 'images/product2.jpg', 
        description: 'This is Beer 2. A smooth ale with caramel undertones and a creamy head.',
        details: 'Details about Beer 2. Ut sollicitudin laoreet magna, sed pretium orci dignissim at.'
    },
    { 
        id: 3, 
        name: 'Beer 3', 
        price: 15, 
        image: 'images/product3.jpg', 
        description: 'This is Beer 3. A robust stout with rich coffee and chocolate flavors.',
        details: 'Details about Beer 3. Fusce placerat malesuada metus, sit amet tristique mauris auctor nec.'
    },
    { 
        id: 4, 
        name: 'Beer 4', 
        price: 18, 
        image: 'images/product4.jpg', 
        description: 'This is Beer 4. A light and fruity wheat beer with hints of banana and clove.',
        details: 'Details about Beer 4. Mauris tincidunt velit et orci tincidunt, ac condimentum urna aliquet.'
    },
    { 
        id: 5, 
        name: 'Beer 5', 
        price: 20, 
        image: 'images/product5.jpg', 
        description: 'This is Beer 5. An IPA bursting with tropical fruit aromas and a piney finish.',
        details: 'Details about Beer 5. Integer et justo id felis convallis hendrerit ac at lectus.'
    },
    { 
        id: 6, 
        name: 'Beer 6', 
        price: 22, 
        image: 'images/product6.jpg', 
        description: 'This is Beer 6. A hoppy pale ale with a crisp bitterness and floral notes.',
        details: 'Details about Beer 6. Phasellus in odio vitae tortor sollicitudin malesuada vel eget elit.'
    },
    { 
        id: 7, 
        name: 'Beer 7', 
        price: 25, 
        image: 'images/product7.jpg', 
        description: 'This is Beer 7. A Belgian tripel with a fruity aroma and a spicy yeast character.',
        details: 'Details about Beer 7. Proin dapibus ex sit amet quam luctus, sit amet accumsan lectus auctor.'
    },
    { 
        id: 8, 
        name: 'Beer 8', 
        price: 28, 
        image: 'images/product8.jpg', 
        description: 'This is Beer 8. A rich and malty bock beer with a smooth caramel finish.',
        details: 'Details about Beer 8. Duis consequat libero ac ante pretium, in dignissim felis vestibulum.'
    },
    { 
        id: 9, 
        name: 'Beer 9', 
        price: 30, 
        image: 'images/product9.jpg', 
        description: 'This is Beer 9. A refreshing pilsner with a crisp taste and a clean, dry finish.',
        details: 'Details about Beer 9. Vestibulum ultrices urna sit amet luctus condimentum.'
    },
    { 
        id: 10, 
        name: 'Beer 10', 
        price: 35, 
        image: 'images/product10.jpg', 
        description: 'This is Beer 10. A sour ale with a tart acidity and complex fruity flavors.',
        details: 'Details about Beer 10. Nullam euismod ipsum nec mi lobortis, vitae rutrum nulla posuere.'
    }
];

// Clear cart
function clearCart(){
    localStorage.setItem('myCart', JSON.stringify([]));
    location.reload(true);
}

// Function to display products on the page
function displayProducts() {
    const productContainer = document.getElementById('product-list');
    if (productContainer) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <p>${product.description}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
            productContainer.appendChild(productElement);
        });
    }
}

function fillcart(){
    const cartContainer = document.getElementById('cart-items')
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    if(cartContainer){
        cart.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
            <div class = "cart-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <p>${product.description}</p>
                </div>
            </div>
            `;
            cartContainer.appendChild(productElement);
        });
    }
}

// Function to add a product to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    // Find the product by id
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        // Add the product to the cart array
        cart.push(productToAdd);
        localStorage.setItem('myCart', JSON.stringify(cart));
        // Update the cart display (for demonstration, we log to console)
    }
}



// Load products on page load
document.addEventListener('DOMContentLoaded', displayProducts);
fillcart();