
$(document).ready(function () {
let randomNumber = Math.floor((Math.random() * 100) + 1);
let essai = 0;

    $("button").click(function () {
        essai++;
        console.log(essai);
        let guess = $("input").val();
        if (isNaN(guess) == false){
            if (parseInt(guess, 10) === randomNumber) {
                alert("bravo! c'est ca!");
                alert("tu as trouvé en " + " essai(s)");
                return;
            } else if (essai === 5){
            alert ("Perdu! Le nombre était : " + randomNumber);
            return;
            } else if (parseInt(guess, 10) < randomNumber) {
                alert("trop petit");
            }else {
                alert("trop grand!");
            }
        }else {
            alert("Entrez un chiffre svp");
        }
    });

});
