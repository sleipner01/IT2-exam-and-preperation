var objekt = {
    fornavn: "Byrkj",
    etternavn: "Byrkjeland",
    alder: 18,
    adresse: "Tåsenveien 91d"
}

var objekt2 = {
    fornavn: "Allison",
    etternavn: "Allison",
    alder: 18,
    adresse: "Disenveien x"
}

var array = [objekt, objekt2];
console.log(array[0]["fornavn"], array[1].fornavn);


var person = {objekt, objekt2};
console.log(person.objekt);
console.log(person.objekt2);
console.log(person.objekt.adresse);
console.log(person.objekt2.adresse);