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

//Spill
var spillAvEl = document.getElementById("spillAv");
    spillAvEl.addEventListener("click", spillAv);
var antallForsokEl = document.getElementById("antallForsok");
var sisteForsokEl = document.getElementById("sisteForsok");
var highScoreEl = document.getElementById("highScore");
var forsokEl = document.getElementById("forsok");

var fagottEl = document.getElementById("fagott");
    fagottEl.addEventListener("click", sjekkSvar);
var floyteEl = document.getElementById("floyte");
    floyteEl.addEventListener("click", sjekkSvar);
var klarinettEl = document.getElementById("klarinett");
    klarinettEl.addEventListener("click", sjekkSvar);
var oboEl = document.getElementById("obo");
    oboEl.addEventListener("click", sjekkSvar);
var valthornEl = document.getElementById("valthorn");
    valthornEl.addEventListener("click", sjekkSvar);

var fagottLyd = document.getElementById("fagottLyd");
var floyteLyd = document.getElementById("floyteLyd");
var klarinettLyd = document.getElementById("klarinettLyd");
var oboLyd = document.getElementById("oboLyd");
var valthornLyd = document.getElementById("valthornLyd");
var feilLyd = document.getElementById("feilLyd");
var riktigLyd = document.getElementById("riktigLyd");

var antallForsok = 0;
var highScore = null;

var alleBilder = [fagottEl, floyteEl, klarinettEl, oboEl, valthornEl];

var alleLyder = [fagottLyd, floyteLyd, klarinettLyd, oboLyd, valthornLyd];
console.log("Dette er alleLyder:");
console.log(alleLyder);

var tilfeldigLyd = alleLyder[Math.floor(Math.random() * alleLyder.length)];
console.log(tilfeldigLyd.id);
console.log("_____");

function spillAv() {
    tilfeldigLyd.play();
    console.log("spillAv");
}

function sjekkSvar(e) {
    var gjettet = e.target;
    console.log(gjettet.id);
    //console.log(tilfeldigLyd.includes(gjettet));
    antallForsok++;
    antallForsokEl.innerHTML = "Antall forsøk: " + antallForsok;

    if(tilfeldigLyd.id.indexOf(gjettet.id) !== -1) {
        console.log("riktig");
        riktigLyd.play();
        gjettet.style.display = "none";

        for(var i = 0; i < alleLyder.length; i++) {
            if(alleLyder[i] === tilfeldigLyd) {
                console.log(alleLyder[i]);
                alleLyder.splice(i, 1);
            }  
        }

        if(alleLyder.length > 0) {
            tilfeldigLyd = alleLyder[Math.floor(Math.random() * (alleLyder.length))];
            console.log(tilfeldigLyd.id);
            console.log("_____");
            tilfeldigLyd.autoplay = true;
            tilfeldigLyd.load();
        }

        if(alleLyder.length === 0) {
            for(var i = 0; i < alleBilder.length; i++) {
                alleBilder[i].style.display = "initial";
            }

            sisteForsokEl.innerHTML = "Siste spill ble ferdig på " + antallForsok + " forsøk!";

            if(antallForsok === 5) {
                antallForsokEl.innerHTML = "Antall forsøk: " + antallForsok + " - Gratulerer! Du klarte det med 0 feil!";
            }

            if(antallForsok <= highScore || highScore === null) {
                highScore = antallForsok;
                var skrivHighScore = document.createElement("p");
                skrivHighScore.innerHTML = highScore + " forsøk.";
                highScoreEl.appendChild(skrivHighScore);
            }

            antallForsok = 0
            alleLyder = [fagottLyd, floyteLyd, klarinettLyd, oboLyd, valthornLyd];
            tilfeldigLyd = alleLyder[Math.floor(Math.random() * alleLyder.length)];
            console.log(tilfeldigLyd.id);
        }
    } else {
        console.log("Feil");
        feilLyd.play();
        console.log(antallForsok);
    }
}
