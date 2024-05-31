const products = [
    { name: '1. Rak Tirisan Piring', link: 'https://shopee.co.id/product/464835137/20293266153', description: '' },
    { name: 'Wireless Earbuds', link: 'https://example.com/earbuds', description: '' },
    { name: 'Smart Watch', link: 'https://example.com/smartwatch', description: '' },
    { name: 'Electric Screwdriver', link: 'https://example.com/screwdriver', description: '' },
    { name: 'Portable Charger', link: 'https://example.com/charger', description: '' }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            // <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            `;
        productItem.addEventListener('click', () => {
            window.open(product.link, '_blank');
        });
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
