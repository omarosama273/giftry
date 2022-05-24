

function addProduct() {

    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    products.push(product)
    localStorage.setItem('productList', JSON.stringify(products))
}

function displayData() {
    var cartona = '';

    for (var i = 0; i < products.length; i++) {
        cartona += `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="getInfoProduct(${i})" class='btn btn-outline-warning'>update</button></td>
        <td><button onclick="delateProduct(${i})" class='btn btn-outline-danger'>delate</button></td>
        </tr>`;
    }


    document.getElementById('tableBody').innerHTML = cartona

}

function getInfoProduct(index) {
    currentIndex = index;

    var currentProduct = products[index];
    productNameInput.value = currentProduct.name;
    productPriceInput.value = currentProduct.price;
    productCategoryInput.value = currentProduct.category;
    productDescInput.value = currentProduct.desc;
    addBtn.innerHTML = "uptade product"
}

function updateProduct() {
    alert(currentIndex)
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    products[currentIndex] = product;
    addBtn.innerHTML = "Add Product"
    localStorage.setItem('productList', JSON.stringify(products));

}



function delateProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(products))
    displayData()
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
    productCategoryInput.classList.remove('is-valid');
    productNameInput.classList.remove('is-valid');
    productPriceInput.classList.remove('is-valid');

    addBtn.disabled = 'true';
}


function search(searchTxt) {

    var cartona = '';

    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toUpperCase().includes(searchTxt.toUpperCase()))
            cartona += `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="getInfoProduct(${i})" class='btn btn-outline-warning'>update</button></td>
        <td><button onclick="delateProduct(${i})" class='btn btn-outline-danger'>delate</button></td>
        </tr>`;
    }


    document.getElementById('tableBody').innerHTML = cartona


}


productCategoryInput.addEventListener("keyup",cheek)
productPriceInput.addEventListener("keyup",cheek)
function cheek(){

if(nameRejex()&&priceRejex()&&categoryRejex()){
       addBtn.removeAttribute('disabled')
    }
    else{
        addBtn.disabled = 'true';
       
    }
}





 function nameRejex () {
    var nameRejex = /^[A-Z][a-z]{2,8}$/;
    if (nameRejex.test(productNameInput.value)) {
        
        productNameInput.classList.add('is-valid');
        productNameInput.classList.remove('is-invalid');
        nameAlart.classList.add('d-none')
        return true;
    }
    else {
       
        productNameInput.classList.add('is-invalid');
        productNameInput.classList.remove('is-valid');
        nameAlart.classList.remove('d-none')
        return false;
    }
}
function priceRejex () {
    var priceRejex = /^[1-9]{1,4}$/;
    if (priceRejex.test(productPriceInput.value)) {
        productPriceInput.classList.add('is-valid');
        productPriceInput.classList.remove('is-invalid');
        priceAlart.classList.add('d-none')
        return true;
    }
    else {
        productPriceInput.classList.add('is-invalid');
        productPriceInput.classList.remove('is-valid');
        priceAlart.classList.remove('d-none')
        return false;
    }
}


function categoryRejex () {
    var categoryRejex = /^[A-Z][a-z]{2,8}$/;
    if (categoryRejex.test(productCategoryInput.value)) {
        productCategoryInput.classList.add('is-valid');
        productCategoryInput.classList.remove('is-invalid');
        categoryAlart.classList.add('d-none')
        return true;
    }
    else {
        productCategoryInput.classList.add('is-invalid');
        productCategoryInput.classList.remove('is-valid');
        categoryAlart.classList.remove('d-none')
        return false;
    }
}

   







 