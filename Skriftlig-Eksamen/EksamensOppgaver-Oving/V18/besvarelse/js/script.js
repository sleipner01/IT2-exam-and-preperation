var aapningstiderEl = document.getElementById("aapningstider");
    aapningstiderEl.addEventListener("mouseover", visInfo);
    aapningstiderEl.addEventListener("mouseout", skjulInfo);
var priserEl = document.getElementById("priser");
    priserEl.addEventListener("mouseover", visInfo);
    priserEl.addEventListener("mouseout", skjulInfo);
var informasjonBildeEl = document.getElementById("informasjon");
    informasjonBildeEl.addEventListener("mouseover", visInfo);
    informasjonBildeEl.addEventListener("mouseout", skjulInfo);
var infoAapningstiderEl = document.getElementById("info-aapningstider");
var infoPriserEl = document.getElementById("info-priser");
var infoInformasjonEl = document.getElementById("info-informasjon");

var bildeserieEl = document.getElementsByClassName("bildeserie");
var bilderEl = document.getElementById("bilde");
var forrigeEl = document.getElementById("forrige");
    forrigeEl.addEventListener("click", bildeNummer);
var nesteEl = document.getElementById("neste");
    nesteEl.addEventListener("click", bildeNummer);

function visInfo(e) {
    console.log("Musa er over " + e.target.id);
    e.target.style.boxShadow = "0px 0px 6px white";
    if(e.target.id === "aapningstider") {
        infoAapningstiderEl.style.display = "initial";
    } else if(e.target.id === "priser") {
        infoPriserEl.style.display = "initial";
    } else if(e.target.id === "informasjon") {
        infoInformasjonEl.style.display = "initial";
    }
}

function skjulInfo(e) {
    console.log("Musa er gått av " + e.target.id);
    e.target.style.boxShadow = "none";
    if(e.target.id === "aapningstider") {
        infoAapningstiderEl.style.display = "none";
    } else if(e.target.id === "priser") {
        infoPriserEl.style.display = "none";
    } else if(e.target.id === "informasjon") {
        infoInformasjonEl.style.display = "none";
    }
}

var img = 1;
visBilde();

function bildeNummer(e) {
    if(e.target.id === "neste") {
        img = img + 1;
        if(img > 4) {
            img = 4;
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
    bilderEl.src = "../Vedlegg_V18/intro" + img + ".jpg";
}