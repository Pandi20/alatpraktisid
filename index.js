const products = [
    { name: 'Portable Blender', image: 'images/blender.jpg', link: '#', description: 'Perfect for smoothies on the go.' },
    { name: 'Wireless Earbuds', image: 'images/earbuds.jpg', link: '#', description: 'Experience music wirelessly.' },
    { name: 'Smart Watch', image: 'images/smartwatch.jpg', link: '#', description: 'Track your fitness and notifications.' },
    { name: 'Electric Screwdriver', image: 'images/screwdriver.jpg', link: '#', description: 'Handy tool for DIY projects.' },
    { name: 'Portable Charger', image: 'images/charger.jpg', link: '#', description: 'Keep your devices charged on the go.' }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">Buy Now</a>
        `;
        productList.appendChild(productItem);
    });
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}

// Initial display of all products
displayProducts(products);
