const products = [
{ name: '1. Lampu Kipas', link: 'https://s.shopee.co.id/6fLnkUfAso', description: '' },
{ name: '2. Cermin Putar', link: 'https://s.shopee.co.id/9Ufz6JTnCO', description: '' },
{ name: '3. Karpet Lantai Puzzle', link: 'https://s.shopee.co.id/3L5LlJimm6', description: '' },
{ name: '4. Kipas Angin Ekstraktor', link: 'https://s.shopee.co.id/9ezPJFHwQ8', description: '' },
{ name: '5. Lantai Kayu Jati Portable', link: 'https://s.shopee.co.id/3VOlyU9Cvh', description: '' }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h1>${product.name}</h1>
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
