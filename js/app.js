function small() {
    myPizza.size = "Small";
    myPizza.sizeCharge = 650;
    myPizza.toppingCharge = 100;
    myPizza.crustCharge = 150;
};

function medium() {
    myPizza.size = "Medium";
    myPizza.sizeCharge = 800;
    myPizza.crustCharge = 250;
    myPizza.toppingCharge = 200;

};

function large() {
    myPizza.size = "Large";
    myPizza.sizeCharge = 1000;
    myPizza.crustCharge = 300;
    myPizza.toppingCharge = 250;

};

function delivery() {

    myPizza.delivery = 200;
    prompt("Where would you like to have your pizza delivered. Enter Estate Name");
    alert("Your delivery fees would be ksh 200!")

};
function checkedToppings() {
    let checked = 0;
    if (document.getElementById("toppings1").checked) { checked++; }
    if (document.getElementById("toppings2").checked) { checked++; }
    if (document.getElementById("toppings3").checked) { checked++; }
    if (document.getElementById("toppings4").checked) { checked++; }
    if (document.getElementById("toppings5").checked) { checked++; }
    if (document.getElementById("toppings6").checked) { checked++; }
    let total = myPizza.toppingCharge *= checked;
    console.log(total);
}

function crust() {
    console.log(myPizza.size);
    if (myPizza.size === "Large") {
        document.getElementById("thin-crust").innerHTML = "ksh " + 300;
        document.getElementById("hard-crust").innerHTML = "ksh " + 300;
        document.getElementById("thick-crust").innerHTML = "ksh " + 300;
        document.getElementById("italian-crust").innerHTML = "ksh " + 300;

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("thin-crust").innerHTML = "ksh " + 250;
        document.getElementById("hard-crust").innerHTML = "ksh " + 250;
        document.getElementById("thick-crust").innerHTML = "ksh " + 250;
        document.getElementById("italian-crust").innerHTML = "ksh " + 250;
    }
    else if (myPizza.size === "Small") {
        document.getElementById("thin-crust").innerHTML = "ksh " + 150;
        document.getElementById("hard-crust").innerHTML = "ksh " + 150;
        document.getElementById("thick-crust").innerHTML = "ksh " + 150;
        document.getElementById("italian-crust").innerHTML = "ksh " + 150;

    } else{
        alert("order crust");
    }

}
function toppings() {
    if (myPizza.size === "Large") {
        document.getElementById("fruit-topping").innerHTML = "Ksh 250";
        document.getElementById("kale-topping").innerHTML = "Ksh 250";
        document.getElementById("pepperoni-topping").innerHTML = "Ksh 250";
        document.getElementById("spinach-topping").innerHTML = "Ksh 250";
        document.getElementById("tomato-topping").innerHTML = "Ksh 250";
        document.getElementById("cheese-topping").innerHTML = "Ksh 250";

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("fruit-topping").innerHTML = "ksh 200";
        document.getElementById("kale-topping").innerHTML = "ksh 200";
        document.getElementById("pepperoni-topping").innerHTML = "ksh 200";
        document.getElementById("spinach-topping").innerHTML = "ksh 200";
        document.getElementById("tomato-topping").innerHTML = "ksh 200";
        document.getElementById("cheese-topping").innerHTML = "ksh 200";

    }
    else if (myPizza.size === "Small") {
        document.getElementById("fruit-topping").innerHTML = "ksh 100";
        document.getElementById("kale-topping").innerHTML = "ksh 100";
        document.getElementById("pepperoni-topping").innerHTML = "ksh 100";
        document.getElementById("spinach-topping").innerHTML = "ksh 100";
        document.getElementById("tomato-topping").innerHTML = "ksh 100";
        document.getElementById("cheese-topping").innerHTML = "ksh 100";


    }
    else{
        alert("pick one toppings");
    }

}

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = 0;
    this.sizeCharge = 0;
    this.toppingCharge = 0;
    this.crustCharge = 0;
}

let myPizza = new Pizza();

Pizza.prototype.totalCharge = function () {
    return myPizza.sizeCharge + myPizza.crustCharge + myPizza.toppingCharge + myPizza.delivery;
};
function newFinalPrice() {
    let price = myPizza.totalCharge()
    reset();
    console.log(myPizza.totalCharge());
    console.log(myPizza.size());

}
function reset() {
    document.getElementsByName("delivery").reset;
    document.getElementsByName("toppings").reset;
    document.getElementsByName("crust").reset;
    document.getElementsByName("size").reset;
    let del = document.getElementsByName("delivery");
    let top = document.getElementsByName("toppings");
    let crus = document.getElementsByName("crust");
    let size = document.getElementsByName("size");
    for (let i = 0; i < del.length; i++) {
        del[i].checked = false;
    }
    for (let i = 0; i < top.length; i++) {
        top[i].checked = false;
    }
    for (let i = 0; i < crus.length; i++) {
        crus[i].checked = false;
    }
    for (let i = 0; i < size.length; i++) {
        size[i].checked = false;
    }
};

function finalPrice() {
    document.getElementById("size-price").innerHTML = "ksh " + myPizza.sizeCharge;
    document.getElementById("crust-price").innerHTML = "ksh " + myPizza.crustCharge;
    document.getElementById("topping-price").innerHTML = "ksh " + myPizza.toppingCharge;
    document.getElementById("delivery-price").innerHTML = "ksh " + myPizza.delivery;
    document.getElementById("total-charge").innerHTML = "ksh " + myPizza.totalCharge();
};

