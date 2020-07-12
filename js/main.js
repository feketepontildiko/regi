console.log("HEllo, this is a first console message");
//alert("hello te fasz" );

function calcAmount() {


    let price = 100;
    let amountInput = document.querySelector("input[name='amount-input']");
    if (parseInt(amountInput.value) > 0 && parseInt(amountInput.value) < 10) {
        let amount = parseInt(amountInput.value) * price;
        //alert("Fizetendő: " + amount + "Ft.")

        let showAmount = document.querySelector("span.show-amount");
        showAmount.innerHTML = amount;
    }
    else {
        alert("A rendelhető mennyiség: 1-10");
    }

}

function customerDataISValid() {
     if (isNaN(document.querySelector("input[name='name']"))) {
         alert("The name field can not be empty!");
     }
     if (isNaN(document.querySelector("input[name='address']"))) {
         alert("The address field can not be empty!");
     }
     if (isNaN(document.querySelector("input[name='phone']"))){
         alert("The phone field can not be empty!");
     }
     

   /* if ((document.querySelector("input[name='name']")).length === 0) {
        alert("The name field can not be empty!");
    }
    if ((document.querySelector("input[name='address']")).length === 0) {
        alert("The address field can not be empty!");
    }
    if ((document.querySelector("input[name='phone']")).length === 0) {
        alert("The phone field can not be empty!");
    }
    */
}


