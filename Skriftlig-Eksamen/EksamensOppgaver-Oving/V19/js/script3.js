class Hytte {
    constructor(id, gjendesheim, glitterheim, memurbu, gjendebu, leirvassbu, spiterstulen, olavsbu) {
        this.id = id;
        this.gjendesheim = gjendesheim;
        this.glitterheim = glitterheim;
        this.memurbu = memurbu;
        this.gjendebu = gjendebu;
        this.leirvassbu = leirvassbu;
        this.spiterstulen = spiterstulen;
        this.olavsbu = olavsbu;
    }
}

var velgHytteEl = document.getElementById("velgHytte");
var velg = document.getElementById("velg");
    velg.addEventListener("click", leggTilHytte);

var gjendesheim = new Hytte("Gjendesheim", "-", 22, 14, "-", "-", "-", "-");
var glitterheim = new Hytte("Glitterheim", 22, "-", 18, "-", "-", 17, "-");
var memurbu = new Hytte("Memurbu", 14, 18, "-", 10, "-", "-", "-");

var hytter = [gjendesheim, glitterheim, memurbu];
var tur = [];

for(var i = 0; i < hytter.length; i++) {
    var hytte = document.createElement("option");
        hytte.innerHTML = hytter[i].id;
        hytte.value = hytter[i].id.toLowerCase();
        velgHytteEl.appendChild(hytte);
}

function leggTilHytte() {
    tur.push(velgHytteEl.options[velgHytteEl.selectedIndex].value);
    console.log(tur[0]);
    console.log(hytter[0].tur[0]);
} 