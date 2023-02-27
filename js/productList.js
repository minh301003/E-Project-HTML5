// lay danh sach sp
const listProducts = window.listProducts;
// function dung de tao ra 1 khoi san pham
function createProductBlock(product) {
  const productData = `<div class="product-item-list col-12 col-md-6 col-lg-4" data-category="${product.types}">
                <div class="product-item sale">
                  <div class="product-item-pic set-bg">
                    <a href="./product_details.html?id=${product.id}"><img src="${product.img[0]}" alt=""></a>
                    <span class="label">Sale</span>
                  </div>
                  <div class="product-item-text">
                    <h4>${product.name}</h4>
                    <h5>$${product.price.origin}</h5>
                    <p>${product.detailShort}</p>
                  </div>
                </div>
              </div>`;
  const target = document.querySelector('#productListContainer');
  target.innerHTML += productData;
}
function renderListproduct(productList) {
  const target = document.querySelector('#productListContainer');
  target.innerHTML = '';
  productList.forEach(product => {
    createProductBlock(product);
  });
}
renderListproduct(listProducts);

function getAllCheckedFilter() {
  // lay toan bo danh sach cac filter da duoc tich
  const categoryFilterWrapper = document.querySelector('#collapseCategory');
  const listCateChecked = [...categoryFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];
  const listFilterCate = listCateChecked.map(input => input.value);

  // const materialFilterWrapper = document.querySelector('#flush-collapseMaterial');
  // const listMaterialChecked = [...materialFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];
  // const listFilterMaterial = listMaterialChecked.map(input => input.value);

  const listData = listProducts.filter(product => {
    let validCategory = false;
    validCategory = listFilterCate.length ? product.category.some(cate => listFilterCate.includes(cate)) : true;

    // let validMaterial = false;
    // validMaterial = listFilterMaterial.length
    //   ? product.materials.some(material => listFilterMaterial.includes(material))
    //   : true;

    return validCategory ;
  });

  renderListproduct(listData);
}
