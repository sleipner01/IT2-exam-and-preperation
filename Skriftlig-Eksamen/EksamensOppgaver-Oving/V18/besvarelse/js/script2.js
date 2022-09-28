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

//Oppgave 2
var antallVoksneEl = document.getElementById("antallVoksne");
var antallBarnEl = document.getElementById("antallBarn");

var ffEl = document.getElementById("ff");
    ffEl.addEventListener("click", bestill);
var spillOppEl = document.getElementById("spillOpp");
    spillOppEl.addEventListener("click", bestill);
var onsdagskonsertEl = document.getElementById("onsdagskonsert");
    onsdagskonsertEl.addEventListener("click", bestill);
var juliogatEl = document.getElementById("juliogat");
    juliogatEl.addEventListener("click", bestill);
var kvitteringEl = document.getElementById("kvittering");

var voksenPris = 100;
var barnePris = 50;
var antallVoksne;
var antallBarn;
var antallBilletter;
var arrangement;
var totalPris;

function bestill(e) {
    var antallVoksne = Number(antallVoksneEl.value);
    var antallBarn = Number(antallBarnEl.value);
    antallBilletter = antallBarn + antallVoksne;
    arrangement = e.target.value;
    
    var totalVoksenPris = antallVoksne * voksenPris;
    var totalBarnePris = antallBarn * barnePris;
    totalPris = totalVoksenPris + totalBarnePris;

    if(antallBarn === 0 && antallVoksne > 0) {
        kvitteringEl.innerHTML = "Du har bestilt " + antallBilletter + " billetter til '" + arrangement + "', "
                                + antallVoksne + " voksne. " + "Totalprisen er kr " + totalPris + ",-.";
        if(antallBilletter > 4) {
            totalPris = totalPris * 0.8;

            kvitteringEl.innerHTML = "Du har bestilt " + antallBilletter + " billetter til '" + arrangement + "', "
                                + antallVoksne + " voksne. " + "Totalprisen er kr " + totalPris + ",- inklusive rabatt på 20%.";
        }
    }

    if(antallVoksne === 0 && antallBarn > 0) {
        kvitteringEl.innerHTML = "Du har bestilt " + antallBilletter + " billetter til '" + arrangement + "', "
                                + antallBarn + " Barn. " + "Totalprisen er kr " + totalPris + ",-.";
        if(antallBilletter > 4) {
            totalPris = totalPris * 0.8;

            kvitteringEl.innerHTML = "Du har bestilt " + antallBilletter + " billetter til '" + arrangement + "', "
                                + antallBarn + " barn. " + "Totalprisen er kr " + totalPris + ",- inklusive rabatt på 20%.";
        }
    }

    if(antallVoksne > 0 && antallBarn > 0) {
        kvitteringEl.innerHTML = "Du har bestilt " + antallBilletter + " billetter til '" + arrangement + "', "
                             + antallVoksne + " voksne og " + antallBarn + " barn. " + "Totalprisen er kr " + totalPris + ",-.";

        if(antallBilletter > 4) {
            totalPris = totalPris * 0.8;

            kvitteringEl.innerHTML = "Du har bestilt " + antallBilletter + " billetter til '" + arrangement + "', "
                             + antallVoksne + " voksne og " + antallBarn + " barn. " + "Totalprisen er kr " + totalPris + ",- inklusive rabatt på 20%.";
        }
    }

    if(antallVoksne === 0 && antallBarn === 0) {
        alert("Du må angi antall personer");
    }


    antallVoksneEl.value = null;
    antallBarnEl.value = null;

    console.log(antallVoksne);
    console.log(antallBarn);
    console.log(e.target.value);
}