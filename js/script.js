let kmPrice = "0.21";

let userAgeEl = document.getElementById("userAge") ;

let userKmEl = document.getElementById("userKm") ;

let totalPrice = userKmEl.value * kmPrice;



totalPrice = totalPrice.toFixed(2);

let acceptBtn = document.getElementById("acceptBtn");

let refuseBtn = document.getElementById("refuseBtn");

acceptBtn.addEventListener("click", function () {
    
    if(userAgeEl.value < 18){
        
        totalPrice = totalPrice - totalPrice * 0.2;
        
        
    } else if (userAge.value >= 65) {

        totalPrice = totalPrice - totalPrice * 0.4;


    } else {

        totalPrice = totalPrice;
    }
    document.writeln(
        `Il numero di chilometri è: ${userKmEl} km. <br>
        La tua età è di: ${userAgeEl.value} anni. <br>
        Il prezzo totale del biglietto è di: ${totalPrice} euro. `
        )
}) 
