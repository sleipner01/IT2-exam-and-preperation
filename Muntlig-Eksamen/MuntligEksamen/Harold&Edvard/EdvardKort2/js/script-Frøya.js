var kortnummerEl = document.getElementById("kortnummer");
var knappEl = document.getElementById("knapp");
    knappEl.addEventListener("click", sjekkKortNummer);

function sjekkKortNummer() {
    var kortnummer = Number(kortnummerEl.value);
    var gyldig = true;
    if(kortnummer > 0){        
        if(kortnummerEl.value.length != 16) {
            alert("Kortnummeret må inneholde 16 tall");
            gyldig = false;
        }

        var tverrsum = 0;
        var sifre = [];
        for(var i = 0; i < kortnummerEl.value.length; i++) {
            tverrsum += Number(kortnummerEl.value[i]);
            if(sifre.includes(Number(kortnummerEl.value[i])) === false) {
                sifre.push(Number(kortnummerEl.value[i]));
            }
        }
        if(tverrsum <= 16) {
            alert("Tverrsummen av kortnummeret er for lite");
            gyldig = false;
        }

        if(sifre.length < 2) {
            alert("Kortnummeret må inneholde mer enn ett siffer!");
            gyldig = false;
        }
        if(gyldig === true) {
            alert("Kortnummeret er gyldig");
        }
    } else {
        alert("Du må skrive inn et kortnummer med bare tall");
    }

    kortnummerEl.value = "";
}