//Del 1
//Henter inn elementer fra HTML-dokumentet
var innholdEl = document.getElementById("innhold");
var skjemaEl = document.getElementById("skjema");
//Definerer en todimensjonal array for muskelgruppen, og dens øvelser. Arrayen[i][0], vil alltid være muskelgruppen.
var muskelOvelser = [["Armer", "Bicepscurl med stang", "Fransk press"], ["Skuldre", "Stående militærpress", "Sidehev"], ["Ben", "Knebøy", "Leg extention", "Leg curl"], ["Rygg", "Nedtrekk", "Roing"], ["Bryst", "Benkpress", "Flies", "Push up"]];
var muskelGruppeEl = [];
var muskelOvelseEl = [];
var valgtMuskel;
//Printer ut alle muskelgruppene
for(var i = 0; i < muskelOvelser.length; i++) {
    console.log(muskelOvelser[i][0]);
    var muskelGruppe = document.createElement("h4");
    muskelGruppe.setAttribute("id", muskelOvelser[i][0]);
    muskelGruppe.addEventListener("click", finnOvelser);
    muskelGruppe.innerHTML = muskelOvelser[i][0];
    muskelGruppeEl.push(muskelGruppe);

    innholdEl.appendChild(muskelGruppe)
}

function finnOvelser(e) {
    //finner elementene i #innhold og fjerner dem
    //Her har jeg støtt på et problem der jeg ikke kan hente elementene med Tag name, eller andre måter. Blir i > 3, så klarer ikke løkken å fullføre.
    //Jeg har endt opp med denne løkken, ettersom den funker:)
    valgtMuskel = e.target.id;
    for(var i = 0; i < muskelGruppeEl.length; i++) {
        innholdEl.removeChild(muskelGruppeEl[i]);
    }
    //Legger til øvelsene for muskelgruppen som ble trykket på
    for(var i = 0; i < muskelOvelser.length; i++) {
        if(e.target.id === muskelOvelser[i][0]) {            
           for(var j = 1; j < muskelOvelser[i].length; j++) {
            var ovelse = document.createElement("h4");
            ovelse.setAttribute("id", muskelOvelser[i][j]);
            ovelse.innerHTML = muskelOvelser[i][j];
            ovelse.addEventListener("click", opprettSkjema);
            muskelOvelseEl.push(ovelse);

            innholdEl.appendChild(ovelse);
            }
        }
    }
}
//Del 2
function opprettSkjema() {
    for(var i = 0; i < muskelOvelseEl.length; i++) {
        innholdEl.removeChild(muskelOvelseEl[i]);
    }
    innholdEl.innerHTML = "<h3> Økt for: " + valgtMuskel + "</h3>";
    skjemaEl.style.display = "initial";
}
//definerer variabler
var tabellEl = document.getElementById("tabell");
var repitisjonerEl = document.getElementById("repitisjoner");
var motstandEl = document.getElementById("motstand");
var treningsVolumEl = document.getElementById("treningsVolum");
var leggTilEl = document.getElementById("leggTil");
leggTilEl.addEventListener("click", leggTil);

//Definerer variabler til bruk av funksjonene
var settListe = [];
var treningsVolum = 0;
//Lager en klasse for å legge inn settene
class Sett {
    constructor(nummer, repitisjoner, motstand) {
        this.nummer = nummer;
        this.repitisjoner = repitisjoner;
        this.motstand = motstand;
    }
}
//Legger til informasjonen fra skjema i tabellen
function leggTil() {
    settListe.push(new Sett(settListe.length + 1, repitisjonerEl.value, motstandEl.value))
    console.log(settListe);
    
    tabellEl.innerHTML = "<tr><th>Sett nr.</th><th>Repitisjoner</th><th>Motstand</th></tr>";
    for(var i = 0; i < settListe.length; i++) {
        tabellEl.innerHTML += "<tr><td>" + settListe[i].nummer + "</td><td>" + settListe[i].repitisjoner + "</td><td>" + settListe[i].motstand + "</td></tr>";
        treningsVolum = treningsVolum + Number(settListe[i].motstand);
        //Noe skjer med treningsvolumtelleren min, men rekker ikke fikse opp i det...
    }
    treningsVolumEl.innerHTML = "Treningsvolum: " + treningsVolum + "kg";
}