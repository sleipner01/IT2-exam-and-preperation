var tallEl = document.getElementsByClassName("tall");
for(var i = 0; i < tallEl.length; i++) {
    tallEl[i].addEventListener("click", leggTilTall);
}
var metodeEl = document.getElementsByClassName("metode");
for(var i = 0; i < metodeEl.length; i++) {
    metodeEl[i].addEventListener("click", metode);
}
var clearEl = document.getElementById("C");
    clearEl.addEventListener("click", clear);
var regnEl = document.getElementById("=");
    regnEl.addEventListener("click", regnUt);
var displayEl = document.getElementById("display");

var metode = [];
var tall = [];

function leggTilTall(e) {
    displayEl.innerHTML += e.target.innerHTML;
}

function clear() {
    displayEl.innerHTML = "";
    tall = [];
    metode = [];
}

function metode(e) {
    metode.push(e.target.innerHTML);
    tall.push(Number(displayEl.innerHTML));
    displayEl.innerHTML = "";
}

function regnUt() {
    tall.push(Number(displayEl.innerHTML));
    var resultat = 0;

    for(var i = 0; i < metode.length; i++) {
        if(metode[i] === "*") {
            tall[i+1] = tall[i] * tall[i+1];
            tall.splice(i, 1);
            metode.splice(i, 1);
            i--
        }
        if(metode[i] === "/") {
            tall[i+1] = tall[i] / tall[i+1];
            tall.splice(i, 1);
            metode.splice(i, 1);
            i--
        }
    }
    if(tall.length === 1) {
        resultat = tall[0];
    } else {
        for(var i = 0; i < metode.length; i++) {
            if(metode[i] === "+") {
                resultat = tall[i] + tall[i+1];
            }
            if(metode[i] === "-") {
                resultat = tall[i] - tall[i+1];
            }
        }
    }
    displayEl.innerHTML = resultat;
    tall = [];
    metode = [];
}