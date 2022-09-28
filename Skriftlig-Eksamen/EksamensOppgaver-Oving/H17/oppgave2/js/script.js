var inputsEl = document.getElementsByTagName("input");
var knappEl = document.getElementById("knapp");
    knappEl.addEventListener("click", beregn);
var borgerligEl = document.getElementById("borgerlig");
var rgEl = document.getElementById("rg");
var storstEl = document.getElementById("storst");
var forskjellEl = document.getElementById("forskjell");

var borgerlig = ["h", "frp", "krf", "v"];
var rg = ["a", "sv", "sp"];

var borgerligVerdi = 0;
var rgVerdi = 0;
var forskjell = 0;

function beregn() {
    borgerligVerdi = 0;
    rgVerdi = 0;

    for(var i = 0; i < inputsEl.length; i++) {
        for(var j = 0; j < borgerlig.length; j++){
            if(inputsEl[i].id === borgerlig[j]) {
                borgerligVerdi += Number(inputsEl[i].value);
            }
        }
        for(var j = 0; j < rg.length; j++) {
            if(inputsEl[i].id === rg[j]) {
                rgVerdi += Number(inputsEl[i].value);
            }
        }
    }
    borgerligVerdi = Math.round(borgerligVerdi * 10)/10;
    rgVerdi = Math.round(rgVerdi * 10)/10;
    
    borgerligEl.style.width = 10 * borgerligVerdi + "px";
    borgerligEl.innerHTML = borgerligVerdi;
    rgEl.style.width = 10 * rgVerdi + "px";
    rgEl.innerHTML = rgVerdi;

    if(borgerligVerdi > rgVerdi) {
       storstEl.innerHTML =  "Den borgerlige blokken er størst.";
       forskjell = borgerligVerdi - rgVerdi;
    } else {
        storstEl.innerHTML = "Den Rød-Grønne blokken er størst.";
        forskjell = rgVerdi - borgerligVerdi;
    }
    forskjellEl.innerHTML = "Forskjellen mellom dem er " + forskjell + " prosentpoeng.";
}