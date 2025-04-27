document.getElementById('mobile-menu').addEventListener('click', function() {
document.getElementById('main-nav').classList.toggle('active');
});


const products = [
    {
        id: 1,
        name: "Matte Lipstick",
        price: "$22.00",
        image: "https://i.pinimg.com/236x/87/d5/d1/87d5d11db505b4ec5bf266aa72198147.jpg",
        category: "lips"
    },
    {
        id: 2,
        name: "Eyeshadow Palette",
        price: "$45.00",
        image: "https://i.pinimg.com/236x/b0/09/3d/b0093d396d95d92bdd0d40468ad971fd.jpg",
        category: "eyes"
    },
    {
        id: 3,
        name: "Foundation",
        price: "$32.00",
        image: "https://i.pinimg.com/736x/b6/80/22/b68022bd84bac4ff33528fe5deb5f3d1.jpg",
        category: "face"
    },
    {
        id: 4,
        name: "Blush",
        price: "$25.00",
        image: "https://i.pinimg.com/236x/ee/fd/3d/eefd3db5d20fb460286f6bccf7ec8952.jpg",
        category: "face"
    },
    {
        id: 5,
        name: "Mascara",
        price: "$19.00",
        image: "https://i.pinimg.com/236x/69/59/3c/69593c2ab21b962dcd31f95127550f4d.jpg",
        category: "eyes"
    },
    {
        id: 6,
        name: "Makeup Brushes",
        price: "$38.00",
        image: "https://i.pinimg.com/236x/2f/84/15/2f841514c0be8b7203be16246e569061.jpg",
        category: "brushes"
    }
];


function loadProducts() {
    const productContainer = document.getElementById('product-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
    
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}


function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    alert(`Added ${product.name} to your cart!`);
    
}


document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! Your discount code is NEW15.`);
    this.reset();
});


document.addEventListener('DOMContentLoaded', loadProducts);