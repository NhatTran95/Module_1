let productList = [];
function showProductList() {
    let content = '';
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>' +
                        '<td>'+ productList[i] +'</td>' +
                        '<td>'+'<button onclick="editProduct('+ i +')">Edit</button>'+'</td>' +
                        '<td>' + '<button onclick="deleteProduct('+ i +')">Delete</button>' + '</td>' +
                    '</tr>'
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("sumProduct").innerHTML = productList.length + "product";
}
showProductList();
function addProduct() {
    let nameProduct = document.getElementById("newProduct").value;
    productList.push(nameProduct);
    showProductList();
    document.getElementById("newProduct").value = "";
}
function deleteProduct(index) {
    productList.splice(index, 1);
    showProductList();
}
function editProduct(index) {
    let newProduct = prompt("enter new product replace for " + productList[index]);
    productList[index] = newProduct;
    showProductList();
}