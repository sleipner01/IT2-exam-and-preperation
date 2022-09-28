//Oppgave 2a
var antallPikslerEl = document.getElementById("antallPiksler");
var antallMegaPikslerEl = document.getElementById("antallMegaPiksler");
var figurEl = document.getElementById("figur");

function beregn() {
    var bredde = Number(document.getElementById("bredde").value);
    var hoyde = Number(document.getElementById("hoyde").value);

    var antallPiksler = bredde * hoyde;
    antallPikslerEl.innerHTML = bredde + " * " + hoyde + " blir " + antallPiksler + " piksler";

    var antallMegaPiksler = antallPiksler/1000000;
    if(antallMegaPiksler === 1) {
        antallMegaPikslerEl.innerHTML = "Det tilsvarer " + antallMegaPiksler + " megapiksel."; 
    } else {
        antallMegaPikslerEl.innerHTML = "Det tilsvarer " + antallMegaPiksler + " megapiksler."; 
    } 

        if(bredde === hoyde) {
            figurEl.src = "Vedlegg/kvadratisk.jpg";
        } else if(bredde > hoyde) {
            figurEl.src = "Vedlegg/liggende.jpg";
        } else {
            figurEl.src = "Vedlegg/staende.jpg";
        }

}