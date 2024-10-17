document.querySelector('.add-product').addEventListener('click', function() {
    const typeSelect = document.getElementById('type-select');
    const productName = document.getElementById('product-name');
    const productCount = document.getElementById('product-count');

    const typeValue = typeSelect.value;
    const nameValue = productName.value;
    const countValue = productCount.value;

    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (typeValue && nameValue && countValue && namePattern.test(nameValue)) {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.textContent = `${typeValue}: ${nameValue} (Количество: ${countValue})`;
        
        const productsList = document.querySelector('.products-list');
        productsList.appendChild(productItem);

        typeSelect.value = '';
        productName.value = '';
        productCount.value = '';
    } else {
        alert('Пожалуйста, заполните все поля корректно.');
    }
});

document.querySelector('.clear-list').addEventListener('click', function() {
    const productsList = document.querySelector('.products-list');
    productsList.innerHTML = '';
});
