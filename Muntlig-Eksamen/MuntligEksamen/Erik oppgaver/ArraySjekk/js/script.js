var knappEl = document.getElementById("knapp");
    knappEl.addEventListener("click", sjekkArray);

var array = ["Appelsin", "Eple", "Ananas", "Banan", "Dragefrukt"];

for(var i = 0; i < array.length; i++) {
    if(array[i] === "Banan") {
        console.log("Banan er i arrayen");
    }
}

function sjekkArray() {
    var sant = false;

    for(var i = 0; i < array.length; i++) {
        if(array[i] === "Banan") {
            sant = true;
            console.log(sant);
        }
    }
}

var array2 = [];
var frukt;

while(array2.length < 5) {
    array2.push(prompt("Skriv inn en frukt"));
}
if(array2.length === 5) {
    frukt = prompt("Hvilken frukt vil du finne i arrayen?")
}
for(var i = 0; i < array2.length; i++) {
    if(array2[i] === frukt) {
        alert("Ordet '" + frukt + "' var i arrayen!");
    }
}
