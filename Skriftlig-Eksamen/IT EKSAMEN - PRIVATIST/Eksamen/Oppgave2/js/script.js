//Henter alle elementene i HTML dokumentet
var knappEl = document.getElementById("knapp");
    knappEl.addEventListener("click", beregn);
var ovelseEl = document.getElementById("ovelse");
var intensitetLavEl = document.getElementById("lav");
    intensitetLavEl.addEventListener("click", settIntensitet);
var intensitetMiddelsEl = document.getElementById("middels");
    intensitetMiddelsEl.addEventListener("click", settIntensitet);
var intensitetHoyEl = document.getElementById("hoy");
    intensitetHoyEl.addEventListener("click", settIntensitet);
var varighetEl = document.getElementById("varighet");
var dataEl = document.getElementById("data");

//Array med øvelsene og antall kalorier/time
var ovelseKalorier = [["aerobics", 814], ["bordtennis", 236], ["fotball", 510], ["golf", 244], ["jogging", 666]];

//Definerer variabler for bruk i funksjonene
var ovelse;
var intensitet = "";
var varighet;
var kalorierPerTime;
var forbruk;
var sisteIntensitet;

//Egen funksjon for å sette intensiteten, samt bare gi mulighet for å trykke på én intensitet
function settIntensitet(e) {
    //Starter med å sette alle radioknappene til false
    intensitetLavEl.checked = false;
    intensitetMiddelsEl.checked = false;
    intensitetHoyEl.checked = false;

    //Setter radioknappen en har trykket på til true og legger id-verdien til varibelen "intensitet"
    e.target.checked = true;
    intensitet = e.target.id;
    console.log(e.target.id);

    if(intensitet === "lav") {
        intensitetVerdi = 0.8;
        intensitetNavn = "lav";
    } else if(intensitet === "middels") {
        intensitetVerdi = 1;
        intensitetNavn = "middels";
    } else if(intensitet === "hoy") {
        intensitetVerdi = 1.2;

        intensitetNavn = "høy";
    }
    console.log(intensitetVerdi);
}

//Funksjon for å beregne kaloriforbruket
function beregn() {
    ovelse = ovelseEl.options[ovelseEl.selectedIndex].value;
    console.log(ovelse);

    varighet = Number(varighetEl.value);

    if(ovelse === "Velg aktivitet") {
        alert("Du må velge en aktivitet");
    } else {
        if(intensitet === "") {
            alert("Du må velge en intensitet");
        } else {
            if(varighet === 0) {
                alert("Du må angi en variget over 0 minutter");
            } else {
                //Finner antall kcal/time for den valgte øvelsen fra arrayen "ovelseKalorier"
                for(var i = 0; i < ovelseKalorier.length; i++) {
                    if(ovelseKalorier[i][0] === ovelse) {
                        kalorierPerTime = ovelseKalorier[i][1];
                    }
                }

                //regner ut forbruket i kcal ved å gjøre om minutter til timer, og gange sammen faktorene
                //Runder av for å gi praktiske verdier
                forbruk = Math.floor(kalorierPerTime * (varighet/60) * intensitetVerdi);
                
                //Printer ut informasjonen til brukeren
                dataEl.innerHTML = 'Du har valgt "' + ovelse + '" med "' + intensitetNavn + '" intensitet i "' + varighet + '" minutter.<br>';
                dataEl.innerHTML += "Det tilsvarer et forbruk på ca.: " + forbruk + "kcal!"
            }
        }
    }
}