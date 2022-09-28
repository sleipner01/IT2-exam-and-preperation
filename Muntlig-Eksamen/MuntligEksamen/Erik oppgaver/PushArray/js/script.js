var tallEl = document.getElementById("tall");
var leggtilEl = document.getElementById("leggTil");
    leggtilEl.addEventListener("click", leggTilTall);
var minstEl = document.getElementById("minst");
var sorterEl = document.getElementById("sorter");
    sorterEl.addEventListener("click", sorter);

var tall = [];
var forrigeTall;

function leggTilTall() {
    tall.push(Number(tallEl.value));
    tallEl.value = null;
}

function sammenlignTall(a, b) {
    return a - b;
}

function sorter() {
    tall.sort(sammenlignTall);
    for(var i = 0; i < tall.length; i++) {
        if(tall[i] > minstEl.value) {
            console.log(tall[i]);
        }
    }
    console.log(tall);
}

