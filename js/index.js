var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDecsInput = document.getElementById('productDesc');
var productContainer = [];
if (localStorage.getItem('product') != null) {
    productContainer = JSON.parse(localStorage.getItem('product'))
    displayProducts(productContainer)
}
function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDecsInput.value
    }
    productContainer.push(product)
    console.log(product)
    displayProducts(productContainer)
    localStorage.setItem("product", JSON.stringify(productContainer))
    clearForm()
}
function clearForm() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDecsInput.value = '';
}
function deleteProduct(productIndex) {
    productContainer.splice(productIndex, 1);
    localStorage.setItem("product", JSON.stringify(productContainer))
    displayProducts(productContainer)
}
function displayProducts(productContainer) {
    var box = ``;
    for (var i = 0; i < productContainer.length; i++) {
        box += `<tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i});" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = box;
}
function searchProducts(term){
    var matchingProducts=[];
for (var i = 0; i < productContainer.length; i++) 
{
    if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) === true){
        matchingProducts.push(productContainer[i]);
    }
    
}console.log(matchingProducts);
displayProducts(matchingProducts);
}
searchProducts("ex")