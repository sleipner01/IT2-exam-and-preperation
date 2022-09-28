var innloggingEl = document.getElementById("innlogging");
var stemEl = document.getElementById("stem");
var passordEl = document.getElementById("passord");
var loggInnEl = document.getElementById("loggInn");
    loggInnEl.addEventListener("click", sjekkPassord);
var infoEl = document.getElementById("info");
var partiInfoEl = document.getElementById("partiInfo");
var konfirmerEl;
var sjekkResultatEl = document.getElementById("sjekkResultat");
    sjekkResultatEl.addEventListener("click", sjekkResultat);

var partierEl = document.querySelectorAll(".parti");
    partierEl.forEach(function(parti) {parti.addEventListener("click", visInfo)} );

var passord = ["Passord001", "Passord002", "Passord003", "Passord004", "Passord005", "Passord006", "Passord007", "Passord008", "Passord009", "Passord010"];
var antallFeil = 0;
var antallStemmer = 0;
var stemmer = [["Arbeiderpartiet", 0], ["FRP", 0], ["Høyre", 0], ["KRF", 0], ["MDG", 0], ["Piratpartiet", 0], ["Rødt", 0], ["SP", 0], ["SV", 0], ["Venstre", 0]];

function sjekkPassord() {
    antallFeil = 0;
    for(var i = 0; i < passord.length; i++) {
        if(passordEl.value === passord[i]) {
            passord.splice(i, 1);
            console.log(passord);
            infoEl.innerHTML = "Du har logget inn";
            innloggingEl.style.display = "none";
            stemEl.style.display = "flex";
        } else {
            antallFeil++;
        }
    
    if(antallFeil === passord.length)
        infoEl.innerHTML = "Passordet er feil, eller allerede brukt";
    }
}

function visInfo(e) {
    for(var i = 0; i < partierEl.length; i++) {
        if(e.target.innerHTML === partierEl[i].innerHTML) {
            partiInfoEl.innerHTML = "<h1>" + partierEl[i].innerHTML + "</h1>";
            partiInfoEl.innerHTML += "<h2>Er du sikker på at du vil stemme på dette partiet?</h2>";
            partiInfoEl.innerHTML += "<button id='konfirmer' value='" + partierEl[i].innerHTML + "'>Stem</button>"
        }
    }
    konfirmerEl = document.getElementById("konfirmer");
    konfirmerEl.addEventListener("click", leggTilStemme);
}

function leggTilStemme() {
    antallStemmer++;
    console.log(konfirmerEl.value);
    for(var i = 0; i < stemmer.length; i++) {
        if(konfirmerEl.value === stemmer[i][0]){
            stemmer[i][1] += 1;
        }
    }
    console.log(stemmer);
    stemEl.style.display = "none";
    infoEl.innerHTML = "";
    passordEl.value = "";
    innloggingEl.style.display = "initial";
    partiInfoEl.innerHTML = "";
}

function sjekkResultat() {
    for(var i = 0; i < stemmer.length; i++) {
        var partiNavn = stemmer[i][0];
        var partiStemmer = stemmer[i][1];
        console.log(partiNavn,partiStemmer);
        console.log();
    }
}