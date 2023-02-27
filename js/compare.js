const product = window.listProducts;
for (var i = 2; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].name}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].name}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].img[0]
        document.getElementById("price1").innerHTML = "$" + product[a].price.origin
        document.getElementById("cate1").innerHTML = product[a].category
        document.getElementById("desc1").innerHTML = product[a].detail
        document.getElementById("mat1").innerHTML = product[a].materials
        // document.getElementById("brand1").innerHTML = product[a].brand

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        document.getElementById("cate1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("mat1").innerHTML = ""
        // document.getElementById("brand1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].img[0]
        document.getElementById("price2").innerHTML = "$" + product[a].price.origin
        document.getElementById("cate2").innerHTML = product[a].category
        document.getElementById("desc2").innerHTML = product[a].detail
        document.getElementById("mat2").innerHTML = product[a].materials
        // document.getElementById("brand2").innerHTML = product[a].brand

    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        document.getElementById("cate2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ""
        document.getElementById("mat2").innerHTML = ""
        // document.getElementById("brand2").innerHTML = ""

    }
}