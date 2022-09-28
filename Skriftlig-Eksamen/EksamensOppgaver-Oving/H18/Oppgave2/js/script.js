var menyBildeEl = document.getElementById("menybilde");
    menyBildeEl.addEventListener("click", sjekkPunkt);

var forgrunnsvinduEl = document.getElementById("forgrunnsvindu");
var bildeserieEl = document.getElementById("bildeserie");
var bilderEl = document.getElementById("bilder");
var forrigeEl = document.getElementById("forrige");
    forrigeEl.addEventListener("click", bildeNummer);
var nesteEl = document.getElementById("neste");
    nesteEl.addEventListener("click", bildeNummer);
var hyttenavnEl = document.getElementById("hyttenavn");
var sengeplasserEl = document.getElementById("sengeplasser");
var standardEl = document.getElementById("standard");
var lukkEl = document.getElementById("lukk");
    lukkEl.addEventListener("click", lukkForgrunnsvindu);

var hyttenavn;
var sengeplasser;
var standard;

var img = 1;

function sjekkPunkt(e) {
    posX = e.clientX - e.target.offsetLeft;
    posY = e.clientY - e.target.offsetTop;
    console.log(posX, posY);

    if(posX > 224 && posX < 302 && posY > 72 && posY < 140) {
        console.log(e.clientX, e.clientY, "Granbo");
        forgrunnsvinduEl.style.display = "initial";
        hyttenavn = "Granbo";
        sengeplasser = 6;
        standard = "Middels";
        visBilde();
    }
    if(posX > 305 && posX < 385 && posY > 108 && posY < 180) {
        console.log(e.clientX, e.clientY, "Granstua");
        forgrunnsvinduEl.style.display = "initial";
        hyttenavn = "Granstua";
        sengeplasser = 4;
        standard = "Høy";
        visBilde();
    }
}

function bildeNummer(e) {
    if(e.target.id === "neste") {
        img = img + 1;
        if(img > 3) {
            img = 3;
        }  
        console.log(img);
        visBilde();
    } else if(e.target.id === "forrige") {
        img = img - 1;
        if(img < 1) {
            img = 1;
        }
        console.log(img);
        visBilde();
    }
}

function visBilde() {
    if(hyttenavn === "Granbo") {
        bilderEl.src = "../Vedlegg_H18/granbo0" + img + ".jpg";
        hyttenavnEl.innerHTML = "Hyttenavn: " + hyttenavn;
        sengeplasserEl.innerHTML = "Sengeplasser: " + sengeplasser;
        standardEl.innerHTML = "Standard: " + standard;
    }
    if(hyttenavn === "Granstua") {
        bilderEl.src = "../Vedlegg_H18/granstua0" + img + ".jpg";
        hyttenavnEl.innerHTML = "Hyttenavn: " + hyttenavn;
        sengeplasserEl.innerHTML = "Sengeplasser: " + sengeplasser;
        standardEl.innerHTML = "Standard: " + standard;
    }
}

function lukkForgrunnsvindu() {
    forgrunnsvinduEl.style.display = "none";
}

//Oppgave 3
var sjekkBookingEl = document.getElementById("sjekkBooking");
    sjekkBookingEl.addEventListener("click", sjekkBooking);
var ferieEl = document.getElementById("ferie");
var bookingEl = document.getElementById("booking");
var bookingDelEl = document.getElementById("bookingDel");
/*
class Hytter{
    constructor(hyttenavn, jul, vinterferie, paaske) {
        this.hyttenavn = hyttenavn;
        this.jul = jul;
        this.vinterferie = vinterferie;
        this.paaske = paaske;
    }

    ledig() {
        if(ferie === "ledig") {
            console.log(this);
        }
    }
}

var granbo = new Hytter("Granbo", "ledig", "ledig", "utleid"); 
var granstua = new Hytter("Granstua", "utleid", "utleid", "ledig");
var grantoppen = new Hytter("Grantoppen", "utleid", "ledig", "utleid");
var granhaug = new Hytter("Granhaug", "utleid", "ledig", "utleid");
*/
var hytter = [
    {navn: "Granbo", jul: "ledig", vinterferie: "ledig", paaske: "utleid"},
    {navn: "Granstua", jul: "utleid", vinterferie: "utleid", paaske: "ledig"},
    {navn: "Grantoppen", jul: "utleid", vinterferie: "ledig", paaske: "utleid"},
    {navn: "Granhaug", jul: "utleid", vinterferie: "ledig", paaske: "utleid"}
];

var valgtFerie = "";
var ledigHytteNavn = [];
var antallUtleideHytter = 0;

function sjekkBooking() {
    var ferie = ferieEl.options[ferieEl.selectedIndex].value
    console.log("Ferien er " + ferie);
    console.log("______");
    valgtFerie = ferie;
    bookingDelEl.innerHTML = "";
    ledigHytteNavn = [];
    antallUtleideHytter = 0;
    
    for(var i = 0; i < hytter.length; i++) {
        if(hytter[i][ferie] === "ledig") {
            console.log(hytter[i].navn + " er ledig");

            var ledigeHytter = document.createElement("div");
            ledigeHytter.innerHTML = hytter[i].navn + " er ledig. Vil du booke denne hytta?";
            ledigeHytter.className = hytter[i].navn;

            var bookKnapp = document.createElement("button");
            bookKnapp.setAttribute("id", hytter[i].navn);
            bookKnapp.innerHTML = "Book " + hytter[i].navn;
            bookKnapp.addEventListener("click", bookHytte);

            ledigHytteNavn.push(hytter[i].navn);

            bookingDelEl.appendChild(ledigeHytter);
            bookingDelEl.appendChild(bookKnapp);
        } else {
            antallUtleideHytter += 1;
            console.log(antallUtleideHytter);
            if(antallUtleideHytter === hytter.length) {
                bookingDelEl.innerHTML = "Alle hyttene er leid ut.";
            }
        }
    }
    console.log("------");
}

function bookHytte(e) {
    antallUtleideHytter = 0;
    console.log(ledigHytteNavn);
    console.log(e.target.id);

    for(var i = 0; i < hytter.length; i++) {
        if(hytter[i].navn === e.target.id) {
            hytter[i][valgtFerie] = "utleid";
            console.log(hytter[i]);

            bookingDelEl.innerHTML = e.target.id + " er herved leid ut til deg.";
        }
    }
}