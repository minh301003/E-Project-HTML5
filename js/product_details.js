function changeImage(element) {

    var main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
}

function exportHTML() {
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header + document.getElementById("sourcedata").innerHTML + footer;

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}



const listProducts = window.listProducts;

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function getDetailData() {
  const queryId = getProductId();
  const rslt = listProducts.find(product => product.id === +queryId);
  if (!rslt) {
    document.body.innerHTML = `<div class="alert alert-danger" role="alert">
  Not found Product
</div>`;
    return;
  }

  document.querySelector('#detailDataName').textContent = rslt.name;
  document.querySelector('#detailDataDesc').textContent = rslt.detail;
  document.querySelector('#detailDataPrice').textContent = '$' + rslt.price.origin;
  document.querySelector('#main_product_image').src = rslt.img[0];


  for (let i = 0; i < rslt.img[i].length - 1; i++) {
    document.querySelector('#thumbnail').innerHTML += `<li><img onclick="changeImage(this)" src="` + rslt.img[i] + `" width="70"></li> `;
  }

}

getDetailData();
