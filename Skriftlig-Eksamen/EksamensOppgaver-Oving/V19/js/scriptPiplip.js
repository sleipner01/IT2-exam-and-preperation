var innpakningEl = document.querySelector(".innpakning");

var hytter = ["Gjendesheim", "Glitterheim", "Memurubu", "Gjendebu", "Leivassbu", "Spiterstulen", "Olavsbu"];
var naboHytter = [[1, 2], [0, 2, 5], [0, 1, 3], [2, 4, 5, 6], [3, 5, 6], [1, 3, 4], [3, 4]];
var avstander = [[22, 14], [22, 18, 17], [14, 18, 10], [10, 19, 24, 16], [19, 15, 11], [17, 24, 15], [16, 11]];
var reiseBeskrivelse = "";
var totalavstand = 0;
//vi lager en funksjon som oppretter en nedtreksmeny
function finnRuter(e) {
    innpakningEl.innerHTML = reiseBeskrivelse;
    var selectEl = document.createElement("select");
    selectEl.innerHTML += "<option></option>";
    //skriptet for den første nedtreksmenyen.
    if(e == -1) {
        for (var i = 0; i < hytter.length; i++) {
            selectEl.innerHTML += "<option>" + hytter[i] + "</option>";
        }
        //alt som skal skje når et element i nedtrekksmenyen velges
        selectEl.addEventListener("change", function(){
            reiseBeskrivelse += "<p>Du starter reisen din ved: " + hytter[selectEl.selectedIndex-1] + "</p>";
            //vi kaller funksjonen på nytt rekursivt så vi får en ny nedtrekksmeny
            finnRuter(selectEl.selectedIndex-1);
        });
        innpakningEl.innerHTML += "<label>Velg din starthytte: </label>";
    }
    //skriptet for alle nedtrekksmenyer etter den første
    else {
        for (var i = 0; i < naboHytter[e].length; i++) {
            selectEl.innerHTML += "<option>" + hytter[naboHytter[e][i]] + "</option>";
        }
        //alt som skal skje når et element i nedtrekksmenyen velges
        selectEl.addEventListener("change", function(){
            reiseBeskrivelse += "<p>Du drar videre til: " + hytter[naboHytter[e][selectEl.selectedIndex-1]] + ". Denne reisen er: " + avstander[e][selectEl.selectedIndex-1] + "km lang.</p>";
            totalavstand += avstander[e][selectEl.selectedIndex-1];
            //vi kaller funksjonen på nytt rekursivt så vi får en ny nedtrekksmeny
            finnRuter(naboHytter[e][selectEl.selectedIndex-1]);
        });
        innpakningEl.innerHTML += "<p>Du har valgt en reise på: " + totalavstand + "km.</p>";
        innpakningEl.innerHTML += "<label>Velg neste hytte: </label>";
    }
    innpakningEl.appendChild(selectEl);
}

finnRuter(-1);