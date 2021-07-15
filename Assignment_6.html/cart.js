let data_div = document.getElementById("container1");
let len;
let totalPrice=0;
function appendItem(el) {
    
      let div = document.createElement("div");

    let p_name = document.createElement("p")
    p_name.textContent = el.name;

    let p_price = document.createElement("p");
    p_price.innerHTML = el.price;
    totalPrice += Number(el.price);

    let img = document.createElement("img");
    img.src = el.image;

   
    div.append(p_name, p_price, img);

    data_div.append(div);
    
}

function showCartItem() {
    let data = JSON.parse(localStorage.getItem("usercart"));
    len = data.length;
    data.forEach(function (el) {
        appendItem(el);
    })
}
showCartItem();
let total = document.getElementById("showTotalItem");

let div_total = document.createElement("p");
div_total.innerHTML = len;
div_total.style.color = "red";

let p = document.createElement("p");
p.textContent = "Total-Item";

let p1 = document.createElement("p");
p1.textContent = "Total-Price";

let price1 = document.createElement("p");
price1.innerHTML = totalPrice;
price1.style.color = "green";


total.append(p,div_total,p1,price1);
