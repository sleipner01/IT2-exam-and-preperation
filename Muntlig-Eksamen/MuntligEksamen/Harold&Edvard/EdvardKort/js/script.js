var kortnummer;
startSjekk();
function startSjekk() {
   kortnummer = Number(prompt("Skriv inn ditt kortnummer"));
    while(Number.isNaN(kortnummer)) {
        kortnummer = Number(prompt("Skriv inn et gyldig kortnummer"));
    }
    console.log(kortnummer);
    sjekkLengde();
}

function sjekkLengde() {
    if(Number(String(kortnummer).length) != 16) {
        alert("Kortnummeret må bestå av 16 siffer");
        startSjekk();
    } else {
        sjekkSifre();
    }
}

function sjekkSifre() {
    kortnummer = kortnummer.toString();
    var sifre = [];
    for(var i = 0; i < kortnummer.length; i++) {
        if(i === 0) {
            sifre.push(kortnummer[i]);
        } else {
            if(sifre.length > 0 && kortnummer[i] !== kortnummer[i-1]) {
                sifre.push(kortnummer[i]);
            }  
        }
        
    }
    console.log(sifre);
    if(sifre.length < 2) {
        alert("Kortnummeret kan ikke bestå av samme tall");
        startSjekk();
    }
}

