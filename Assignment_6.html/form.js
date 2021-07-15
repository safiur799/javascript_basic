
function addProduct() {
    let form = document.getElementById("myform");
    let name = form.name.value;
    let price = form.price.value;
    let image= form.img.value;

    var obj = {
        name,
        price,
        image
    }

    let arr;
   arr=localStorage.getItem("addItem");
    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("addItem"));
    }
    arr.push(obj);
    localStorage.setItem("addItem", JSON.stringify(arr));
}
let data_item = document.getElementById("conatainer");

function showItem(el) {
    let div = document.createElement("div");

    let p_name = document.createElement("p")
    p_name.textContent = el.name;

    let p_price = document.createElement("p");
    p_price.innerHTML = el.price;

    let img = document.createElement("img");
    img.src = el.image;

    let btn = document.createElement("button");
    btn.innerHTML = "Add to Cart";
    btn.style.display = "block";
    btn.addEventListener("click", function () {
        addCart(el);
    })

    div.append(p_name, p_price, img,btn);

    data_item.append(div);
}

function callItem() {
    let data = JSON.parse(localStorage.getItem("addItem"));

    data.forEach(function (el) {
        showItem(el);
    })
}
callItem();


function addCart(obj){
    let arr;
    arr = localStorage.getItem("usercart");
    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("usercart"));
       
    }
    let a = true;
    for (var key in arr) {
       if( JSON.stringify(arr[key]) === JSON.stringify(obj)){
           a = false;
         } 
    }
    if (a) {
        arr.push(obj);
    }
    else {
        alert("this is already in cart");
    }
 
    localStorage.setItem("usercart",JSON.stringify(arr));
}

function showCart() {
    window.location.href = "cart.html"; 
}