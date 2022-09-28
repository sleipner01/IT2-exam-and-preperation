//Tilfeldig boolsk variabel
var tilfeldig = Math.floor(Math.random()*2);
var boolsk;
if(tilfeldig === 1) {
    boolsk = true;
} else {
    boolsk = false;
}
console.log(boolsk);

skriv();
function skriv() {
    console.log("hei på deg");   
}
/*
skriv2();
function skriv2() {
    console.log(prompt("Skriv noe"));
}*/

var array = [];
for(var i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 20)+1);  
}
console.log(array);

function sorter(a, b) {
    return a-b;
}
array.sort(sorter).reverse();
console.log(array);

for(var i = 0; i < array.length; i++) {
    if(array[i] < 15) {
        array.splice(i, 1);
        i--;
    }
}
console.log(array);

/*
var frukter = [];
while(frukter.length < 5) {
    frukter.push(prompt("Skriv inn en frukt").toLowerCase());
}
var ord = prompt("Skriv inn ordet du vil finne:").toLowerCase();
console.log(frukter, ord);

for(var i = 0; i < frukter.length; i++) {
    if(frukter[i] === ord) {
        console.log(true);
    } 
}
if(frukter.includes(ord) === false) {
        console.log(false);
}*/

//Assosiativ array
var egenskap = "fornavn";
var person = {
    fornavn: "Magnus",
    etternavn: "Byrkjeland",
    alder: 18
}
console.log(person[egenskap]);
if(person.fornavn = "Magnus") {
    console.log(true);
}

var personer = [{person}, {fornavn: "Sensor", etternavn: "Sensorens"}];
console.log(personer[1].fornavn);


var toDim = [[1, 2], [3, 4, 5]];
for(var i = 0; i < toDim.length; i++) {
    for(var j = 0; j < toDim[i].length; j++) {
        console.log(toDim[i][j]);
    }
}


/*
for(var i = 0; i <= 100; i++) {
    console.log(i);
}
*/
/*
for(var i = 1; i < 100; i++) {
    console.log(i);
}*/
/*
for(var i = 0; i <= 100; i += 2) {
    console.log(i);
}*/

//ToDim assosiativ
var bil = {merke: "BMW", modell: 2012};
var bil2 = {merke: "Volvo", modell: 2001};
var biler = {bil, bil2};

console.log(biler.bil.merke);
console.log(biler["bil2"]["modell"]);

//Harald sensoroppgave
var tilfeldigArray = [];
var lengde = Math.floor(Math.random()*7) + 7;
console.log(lengde);

for(var i = 0; i < lengde; i++) {
    var tilfeldigTall = Math.floor(Math.random()*101);
    tilfeldigArray.push(tilfeldigTall);
}
console.log(tilfeldigArray);


var array2 = [["Magnus", "Byrkjeland"], ["Sensor", "Sensorens"]];
for(var i = 0; i < array2.length; i ++) {
    console.log(array2[i][0], array2[i][1]);
}