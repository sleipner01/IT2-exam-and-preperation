var innholdEl = document.getElementById("innhold");
var retterEl = document.getElementById("retter");
var ingredienserEl = document.getElementById("ingredienser");
var porsjonerEl = document.getElementById("porsjoner");

var valgtRett;
var originalRett;

var retter = [
    ["Fløte", ["Ku: ", 1], ["Fettlag melk(Liter): ", 1]],
    ["Kjeks og Ost", ["Kjeks: ", 6], ["Kirsebærost: ", 0.5]],
    ["Viktor", ["Ananas: ", 1], ["Monog(Liter): ", 30]],
    ["Kim", ["Autist(mg): ", 1.5], ["Peniskjøtt(mg): ", 1], ["Asiatisk bakgrunn(kG): ", 68]],
    ["BigMan Allison", ["Kjernekar(kg): ", 70], ["Navn: Magnus - ", 1]]
];

for(var i = 0; i < retter.length; i++) {
    var rett = document.createElement("option");
        rett.innerHTML = retter[i][0];
        rett.setAttribute("id", retter[i][0]);
    
    retterEl.appendChild(rett);
}

function ingredienser() {
    valgtRett = retterEl.options[retterEl.selectedIndex].id;
    if(valgtRett === undefined) {
        valgtRett = originalRett;
    }

    var porsjoner = Number(porsjonerEl.value);

    for(var i = 0; i < retter.length; i++) {
        if(retter[i][0] === valgtRett) {
            ingredienserEl.innerHTML = "<h1>" + valgtRett + "</h1>";
            for(var j = 1; j < retter[i].length; j++) {
                ingredienserEl.innerHTML += "<p>" + retter[i][j][0] + (retter[i][j][1] * porsjoner) + "</p>"; 
                console.log(retter[i][j][0], retter[i][j][1]);
            }
        }
    }
    originalRett = valgtRett;
}