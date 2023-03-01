


let kmPrice = 0.21;

let userAgeEl = document.getElementById("userAge") ;

let userKmEl = document.getElementById("userKm") ;

let acceptBtn = document.getElementById("acceptBtn");

let textEl = document.getElementById("text");

let totalPrice;

acceptBtn.addEventListener("click", function () {

    let totalPrice = userKmEl.value * kmPrice;

    let finalPrice;


    if( !isNaN(userKmEl.value) && !isNaN(userAgeEl.value)) {

    

    
        if(userAgeEl.value < 18){

        
            finalPrice = totalPrice - totalPrice / 100 * 20;
        
        
        } else if (userAgeEl.value >= 65) {
        
            finalPrice = totalPrice - totalPrice / 100 * 40;
        

        } else {
        
            finalPrice = totalPrice;
        }
        textEl.innerHTML =  "La tua età è di: " + userAgeEl.value + " anni. <br>"
        textEl.innerHTML +=  "Il numero di chilometri è: " + userKmEl.value + " km. <br>"
        textEl.innerHTML +=  "Il prezzo totale del biglietto è di: " + finalPrice + " euro."
        
        
    } else{

        alert("Inserisci un numero in entrambi i campi");
    }

    finalPrice = finalPrice.toFixed(2);
})



