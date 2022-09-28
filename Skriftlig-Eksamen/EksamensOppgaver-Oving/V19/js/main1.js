var selectEL = document.getElementById("hytter");
var velgstartEL = document.getElementById("velgstart");
var ferdigEL = document.getElementById("ferdig");
var velgnesteEL = document.getElementById("velgneste")                  //Henter inn alle elementer fra html, linje 1-7
var velgelol = document.getElementById("velgelol");
var ferdigdiv = document.getElementById("ferdigdiv")
var optionEL = document.getElementsByClassName("hytte");

velgstartEL.addEventListener("click", velgStartHytte);                  //Setter eventlistener på velg starthytte knappern, som skal kjøre funksjonen for å velge starthytte
velgnesteEL.addEventListener("click", velgNeste);                       //Setter eventlistener på velg neste hytte knappern, som skal kjøre funksjonen for å velge neste hytte
velgnesteEL.style.display = "none";                                     //Skjuler velgn neste knappen fordi den ikek skal syunes før man har valgt starthytte

ferdigEL.addEventListener("click", ferdig)                              //Setter eventlistener på ferdig-knappen, som skal kjøre funksjonen for å oppsummere turen
ferdigEL.style.display = "none";                                        //Skjuler ferdig knappen fordi den ikke skal vises før brukeren har valgt 2 hytter

ferdigdiv.style.display = "none";                                       //Skjuler div-en som viser oppsummering av turen

console.log(optionEL[1]);

var avstand = [];                   //Oppretter en array for avstandene mellom hyttene i turen
var tur = [];                       //oppretter en array for hyttene turen går innom
var totalavstand = 0;               //Oppretter variabel for den totale distansen turen går over
var forrigeHytte;                   //Oppretter variabel for hvilken hytte brukeren valgte før den neste som velges

class Hytte {                       //Oppretter en class for hyttene, som sier navnet poå hytta og avstandene til de andre hyttene
    constructor(navn, Gjendesheim, Glitterheim, Memurubu, Gjendebu, Leirvassbu, Spiterstulen, Olavsbu) {
        this.navn = navn;
        this.Gjendesheim = Gjendesheim;
        this.Glitterheim = Glitterheim;
        this.Memurubu = Memurubu;
        this.Gjendebu = Gjendebu; 
        this.Leirvassbu = Leirvassbu;
        this.Spiterstulen = Spiterstulen;
        this.Olavsbu = Olavsbu;
    }
}

var Gjendesheim = new Hytte ("Gjendesheim", 0, 22, 14, 0, 0, 0, 0);
var Glitterheim = new Hytte ("Glitterheim", 22, 0, 18, 0, 0, 17, 0);
var Memurubu = new Hytte ("Memurubu", 14, 18, 0, 10, 0, 0, 0);
var Gjendebu = new Hytte ("Gjendebu", 0, 0, 10, 0, 19, 24, 16);         //Oppretter variabel for alle hyttene inne i klassen, avstand 0 betyur at det ikke går direktesti mellom hyttene
var Leirvassbu = new Hytte ("Leirvassbu", 0, 0, 0, 19, 0, 15, 11);
var Spiterstulen = new Hytte ("Spiterstulen", 0, 17, 0, 24, 15, 0, 0);
var Olavsbu = new Hytte ("Olavsbu", 0, 0, 0, 16, 11, 0, 0);

var Hytter = [Gjendesheim, Glitterheim, Memurubu, Gjendebu, Leirvassbu, Spiterstulen, Olavsbu];     //Oppretter array med alle hyttene

function velgStartHytte() {             //Start på funksjonen som velger starthytte, avsluttes på rad 109
    if (selectEL.value === "velg") {
        alert("Vennligst velg en hytte");
        return;                         //Avslutter funksjonen dersom brukeren ikke har valg noen hytte, men det øverste alternativet
    } else {
        for (i = 0; i < Hytter.length; i++) {
            if (Hytter[i].navn === selectEL.value) {
                forrigeHytte = Hytter[i].navn;
                console.log(forrigeHytte);                              //Går gjennom hyttene og finner den med samme navn som den som ble valgt i nedtrekksmenyen og
                tur.push(forrigeHytte);                                 //legger inn den i "forrigeHytte" arrayen
                        if (Hytter[i].Gjendesheim === 0) {
                            optionEL[0].style.display = "none";
                        } else {
                            optionEL[0].style.display = "block";
                        }
                        if (Hytter[i].Glitterheim === 0) {
                            optionEL[1].style.display = "none";
                        } else {
                            optionEL[1].style.display = "block";
                        }
                        if (Hytter[i].Memurubu === 0) {
                            optionEL[2].style.display = "none";
                        } else {
                            optionEL[2].style.display = "block";
                        }                                               //Går gjennom alle hyttene og sjekker om de har direktesti til hytten som er valgt,
                        if (Hytter[i].Gjendebu === 0) {                 //de som har direktesti blir vist i nedtrekksmenyen videre, de andre blir skjult
                            optionEL[3].style.display = "none";         //Dette skjer på linje 59 til 103
                        } else {
                            optionEL[3].style.display = "block";
                        }
                        if (Hytter[i].Leirvassbu === 0) {
                            optionEL[4].style.display = "none";
                        } else {
                            optionEL[4].style.display = "block";
                        }
                        if (Hytter[i].Spiterstulen === 0) {
                            optionEL[5].style.display = "none";
                        } else {
                            optionEL[5].style.display = "block";
                        }
                        if (Hytter[i].Olavsbu === 0) {
                            optionEL[6].style.display = "none";
                        } else {
                            optionEL[6].style.display = "block";

                        }
            }
        }

    }

    velgstartEL.style.display = "none";                             //Skjuler "velg starthytte" knappen
    velgnesteEL.style.display = "initial";                          //Fjerner skjulingen av "velg neste hytte" knappen

}

function velgNeste() {                                              //Starter funksjoinen for hva som skal skje når brukeren trykker velgneste knappen, avsluttes på rad 215
    if (selectEL.value === "velg" || selectEL.value === forrigeHytte) {
        alert("Vennligst velg en hytte, og ikke den samme hytten to ganger på rad");      //Hindrer brukeren å velge øverste alternativ eller den samme hytten to ganger på rad
        return;
    } else {
        for (i = 0; i < Hytter.length; i++) {
            if (Hytter[i].navn === selectEL.value) {

                if (forrigeHytte === "Gjendesheim") {
                    avstand.push(Hytter[i].Gjendesheim);
                    totalavstand += Hytter[i].Gjendesheim;
                    console.log(avstand); 
                    console.log(totalavstand);
                } else if (forrigeHytte === "Glitterheim") {
                    avstand.push(Hytter[i].Glitterheim);
                    totalavstand += Hytter[i].Glitterheim;
                    console.log(avstand); 
                    console.log(totalavstand);
                } else if (forrigeHytte === "Memurubu") {
                    avstand.push(Hytter[i].Memurubu);
                    totalavstand += Hytter[i].Memurubu;
                    console.log(avstand); 
                    console.log(totalavstand);                              //Legger til avstanden mellom hyttene i avstand-arrayen og til den totale avstanden
                } else if (forrigeHytte === "Gjendebu") {                   //Dette skjer fra linje 124 til 159
                    avstand.push(Hytter[i].Gjendebu);
                    totalavstand += Hytter[i].Gjendebu;
                    console.log(avstand); 
                    console.log(totalavstand);
                } else if (forrigeHytte === "Leirvassbu") {
                    avstand.push(Hytter[i].Leirvassbu);
                    totalavstand += Hytter[i].Leirvassbu;
                    console.log(avstand); 
                    console.log(totalavstand);
                } else if (forrigeHytte === "Spiterstulen") {
                    avstand.push(Hytter[i].Spiterstulen);
                    totalavstand += Hytter[i].Spiterstulen;
                    console.log(avstand); 
                    console.log(totalavstand);
                } else if (forrigeHytte === "Olavsbu") {
                    avstand.push(Hytter[i].Olavsbu);
                    totalavstand += Hytter[i].Olavsbu;
                    console.log(avstand); 
                    console.log(totalavstand);
                } 

                forrigeHytte = Hytter[i].navn;
                console.log(forrigeHytte);                                  //Oppdaterer variabelen "forrigeHytte", og legger til den nye valgte hytten i arrayen
                tur.push(forrigeHytte);
                
                for (var j = 0; j < Hytter.length; j++) {
                    if (j === 0) {
                        if (Hytter[i].Gjendesheim === 0) {
                            optionEL[j].style.display = "none";
                        } else {
                            optionEL[j].style.display = "block";
                        }
                    } else if (j === 1) {
                        if (Hytter[i].Glitterheim === 0) {
                            optionEL[j].style.display = "none";
                        } else {
                            optionEL[j].style.display = "block";
                        }
                    } else if (j === 2) {
                        if (Hytter[i].Memurubu === 0) {
                            optionEL[j].style.display = "none";
                        } else {
                            optionEL[j].style.display = "block";
                        }
                    } else if (j === 3) {                                   //Går gjennom alle hyttene og sjekker om de har direktesti til hytten som er valgt,
                        if (Hytter[i].Gjendebu === 0) {                     //de som har direktesti blir vist i nedtrekksmenyen videre, de andre blir skjult
                            optionEL[j].style.display = "none";             //Dette skjer på linje 165 til 208
                        } else {
                            optionEL[j].style.display = "block";
                        }
                    } else if (j === 4) {
                        if (Hytter[i].Leirvassbu === 0) {
                            optionEL[j].style.display = "none";
                        } else {
                            optionEL[j].style.display = "block";
                        }
                    } else if (j === 5) {
                        if (Hytter[i].Spiterstulen === 0) {
                            optionEL[j].style.display = "none";
                        } else {
                            optionEL[j].style.display = "block";
                        }
                    } else if (j === 6) {
                        if (Hytter[i].Olavsbu === 0) {
                            optionEL[j].style.display = "none";
                        } else {
                            optionEL[j].style.display = "block";

                        }
                    }
                }  
            }
        }
    }
    ferdigEL.style.display = "initial";                         //Fjerner skjulingen av ferdig-knappen, nå har brukeren valgt minst 2 hytter på turen sin
}

turenEL = document.getElementById("turen");
kilometerEL = document.getElementById("antallkilometer");       //Henter ut elementene som skal vise oppsummering

function ferdig() {                                             //Starter funksjonen som viser oppsummering, avsluttes på rad 233
    ferdigdiv.style.display = "block";                          //Fjerner skjulingen av oppsummerings-diven

    console.log("FERDIG");                  
    velgelol.style.display = "none";                            //Skjuler hele div-en som har med valg av hytte å gjøre

    for (i = 0; i < avstand.length; i++) {          
        turenEL.innerHTML += tur[i] + " - (" + avstand[i] + "km gange) - ";         //Legger til info om rekkefølge på hyttene og avstanden mellom disse i elementet med id="turen"
    }

    turenEL.innerHTML += tur[i];                                //Legger til siste hytte i elementet med id="turen"

    kilometerEL.innerHTML = "Det blir totalt " + totalavstand + "km";               //Legger til info om totalt antall kilometer i elementet med id="antallkilometer"
}