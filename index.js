const products = [
    { name: '1. Rak Tirisan Piring', image: 'images/1.jpg', link: 'https://shopee.co.id/product/464835137/20293266153', description: '' },
    { name: 'Wireless Earbuds', image: 'images/earbuds.jpg', link: 'https://example.com/earbuds', description: 'Experience music wirelessly.' },
    { name: 'Smart Watch', image: 'images/smartwatch.jpg', link: 'https://example.com/smartwatch', description: 'Track your fitness and notifications.' },
    { name: 'Electric Screwdriver', image: 'images/screwdriver.jpg', link: 'https://example.com/screwdriver', description: 'Handy tool for DIY projects.' },
    { name: 'Portable Charger', image: 'images/charger.jpg', link: 'https://example.com/charger', description: 'Keep your devices charged on the go.' }
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
