const products = [
{ name: '1. Lampu Kipas', link: 'https://s.shopee.co.id/9pItKLzdJq', description: '' },
{ name: '2. Cermin Putar', link: 'https://s.shopee.co.id/9Ufz6JTnCO', description: '' },
{ name: '3. Karpet Lantai Puzzle', link: 'https://s.shopee.co.id/3L5LlJimm6', description: '' },
{ name: '4. Kipas Angin Ekstraktor', link: 'https://s.shopee.co.id/9ezPJFHwQ8', description: '' },
{ name: '5. Lantai Kayu Jati Portable', link: 'https://s.shopee.co.id/3VOlyU9Cvh', description: '' },
{ name: '6. Kanopi Lipat', link: 'https://s.shopee.co.id/2fpiNx3L1x', description: '' },
{ name: '7. Kursi Lipat Camping', link: 'https://s.shopee.co.id/1qGbnTLXTn', description: '' },
{ name: '8. Pompa Angin Portable', link: 'https://s.shopee.co.id/4AeXL5fjAw', description: '' },
{ name: '9. Lampu LED Murah', link: 'https://s.shopee.co.id/30SZyEmuhU', description: '' },
{ name: '10. Lampu Sorot LED', link: 'https://s.shopee.co.id/3Am0AXmHMX', description: '' },
{ name: '11. Meja Belajar Anak', link: 'https://s.shopee.co.id/2fpjZcoBNS', description: '' },
{ name: '12. Lampu LED Darurat', link: 'https://s.shopee.co.id/2q99lvnY2V', description: '' },
{ name: '13. Kemoceng Panjang', link: 'https://s.shopee.co.id/3fiGlSkNLg', description: '' },
{ name: '14. Rak Susun Minimalis', link: 'https://s.shopee.co.id/3q1gxljk0j', description: '' },
{ name: '15. Pel Mini', link: 'https://s.shopee.co.id/3L5QMqle1e', description: '' },
{ name: '16. Set Kunci Socket', link: 'https://s.shopee.co.id/3VOqZ9l0gh', description: '' },
{ name: '17. Tumbler Coffe', link: 'https://s.shopee.co.id/1fxCNmrzPM', description: '' },
{ name: '18. Rak Susun Troli   ', link: 'https://s.shopee.co.id/1qGca5rM4P', description: '' },
{ name: '19. Pembersih Noda Pakaian', link: 'https://s.shopee.co.id/1LKLzAtG5K', description: '' },
{ name: '20. Rak Susun Segitiga', link: 'https://s.shopee.co.id/1VdmBTsckN', description: '' },
{ name: '21. Tempat Baca Al-Qur'an', link: 'https://s.shopee.co.id/2LCtB0pS3Y', description: '' },
{ name: '22. Raket Nyamuk', link: 'https://s.shopee.co.id/2VWJNJooib', description: '' },
{ name: '23. Lampu Belajar', link: 'https://s.shopee.co.id/20a2mOqijW', description: '' },
{ name: '24. Pengusir Cicak', link: 'https://s.shopee.co.id/2AtSyhq5OZ', description: '' },
{ name: '25. Bantal Anti Kempes', link: 'https://s.shopee.co.id/LRonKx47E', description: '' },
{ name: '26. Jemuran Menara', link: 'https://s.shopee.co.id/VlEzdwQmH', description: '' },
{ name: '27. Pejernih Air', link: 'https://s.shopee.co.id/oyOiyKnC', description: '' },
{ name: '28. Pembersih Noda Kain', link: 'https://s.shopee.co.id/B8Ob1xhSF', description: '' },
{ name: '29. Handuk Mandi Dewasa', link: 'https://s.shopee.co.id/10hVaYuWlQ', description: '' },
{ name: '30. Wallpaper Dinding', link: 'https://s.shopee.co.id/1B0vmrttQT', description: '' },
{ name: '31. Selimut Bulu Halus', link: 'https://s.shopee.co.id/g4fBwvnRO', description: '' }
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
