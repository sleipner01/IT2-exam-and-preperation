//var antallTall = Number(prompt("Hvor mange tall skal printes?"));
/*
tall();
function tall() {
    var tilfeldig = [];
    for(var i = 0; i < antallTall; i++) {
        tilfeldigTall = Math.floor(Math.random()*13);
        tilfeldig.push(tilfeldigTall);
    }
    console.log(tilfeldig);
}
*/
var x = 5;
var y = 15;
function sum(a, b) {
    return a + b;
}
console.log(sum(x, y));


var objekt = {
    fornavn: "Magnus",
    etternavn: "Byrkjeland"
}
console.log(objekt.fornavn);


class Personer {
    constructor(fornavn, etternavn) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
    }

    hils() {
        console.log("Hei" + this.fornavn + "" + this.etternavn);
    }
}

var person1 = new Personer("Magnus", "Byrkjeland");

person1.hils();