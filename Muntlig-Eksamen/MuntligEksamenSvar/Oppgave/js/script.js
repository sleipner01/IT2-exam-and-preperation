var kortnummerEl = document.getElementById("kortnummer");
var knappEl = document.getElementById("knapp");
    knappEl.addEventListener("click", sjekkKortNummer);

function sjekkKortNummer() {
    var kortnummer = kortnummerEl.value;
    var gyldig = true;

    if(kortnummer != ""){        
        if(kortnummer.length != 16) {
            alert("Kortnummeret må inneholde 16 sifre");
            gyldig = false;
            kortnummerEl.value = "";
        }

        var tverrsum = 0;
        var sifre = [];
        for(var i = 0; i < kortnummer.length; i++) {
            tverrsum += Number(kortnummer[i]);
            if(sifre.includes(Number(kortnummer[i])) === false) {
                sifre.push(Number(kortnummer[i]));
            }
        }
        if(tverrsum <= 16) {
            alert("Tverrsummen av kortnummeret er for lite");
            gyldig = false;
            kortnummerEl.value = "";
        }

        if(sifre.length < 2) {
            alert("Kortnummeret må inneholde forskjellige sifre!");
            gyldig = false;
            kortnummerEl.value = "";
        }
        if(gyldig === true) {
            alert("Kortnummeret er gyldig");
            kortnummerEl.value = kortnummer;
            kortnummerEl.style.border = "1px solid green";
        }
    } else {
        alert("Du må skrive inn et kortnummer med bare sifre");
        kortnummerEl.value = "";
    } 
}