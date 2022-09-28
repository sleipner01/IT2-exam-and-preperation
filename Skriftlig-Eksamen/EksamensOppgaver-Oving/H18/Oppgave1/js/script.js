var voksenBillettEl = document.getElementById("antallVoksne");
var barneBillettEl = document.getElementById("antallBarn");
var fraEl = document.getElementById("fra");
var tilEl = document.getElementById("til");
var antallDagerEl = document.getElementById("antallDager");
var avslagEl = document.getElementById("avslag");
var sumEl = document.getElementById("sum");

var sjekkPrisEl = document.getElementById("sjekkPris");
sjekkPrisEl.addEventListener("click", beregnPris);

var voksenBillettPris = 200;
var barneBillettPris = 100;

function beregnPris() {
    var antallVoksne = voksenBillettEl.value;
    var antallBarn = barneBillettEl.value;
    var fra = fraEl.value;
    var til = fraEl.value;
    var antallDager = antallDagerEl.value;

    console.log("Antall Voksne:" + antallVoksne);
    console.log("Antall Barn:" + antallBarn);
    console.log("Antall dager:" + antallDager);

    if(antallDager > 7) {
        alert("Du kan maks bestille for syv dager");
        antallDagerEl.value = null;
    } else {
        var prisPerVoksen = voksenBillettPris * antallDager;
        var prisPerBarn = barneBillettPris * antallDager;
        console.log("Ordinær pris per voksen:" + prisPerVoksen);
        console.log("Ordinær pris per barn:" + prisPerBarn);

        if(prisPerVoksen > 1000) {
            var rabattPerVoksenBillett = prisPerVoksen - 1000;
            console.log("Rabatt per voksen:" + rabattPerVoksenBillett);
            prisPerVoksen = 1000;
        }
        if(prisPerBarn > 500) {
            var rabattPerBarneBillett = prisPerBarn - 500;
            console.log("Rabatt per barn:" + rabattPerBarneBillett);
            prisPerBarn = 500;
        }
        
        totalRabattVoksne = rabattPerVoksenBillett * antallVoksne;
        totalRabattBarn = rabattPerBarneBillett * antallBarn;
        console.log("Total rabatt voksne:" + totalRabattVoksne);
        console.log("Total rabatt barn:" + totalRabattBarn);

        var prisVoksen = prisPerVoksen * antallVoksne;
        var prisBarn = prisPerBarn * antallBarn;
        console.log("Pris for voksne:" + prisVoksen);
        console.log("Pris for barn:" + prisBarn);
        
        avslagEl.innerHTML = "Avslag: " + (totalRabattVoksne + totalRabattBarn);
        sumEl.innerHTML = "Sum: " + (prisVoksen + prisBarn);
    }
}