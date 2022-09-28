var toDimArray = [["Magnus", "liker", "J"], ["Victor", "liker", "også", "J"]];

for(var i = 0; i < toDimArray.length; i++) {
    for(var j = 0; j < toDimArray[i].length; j++) {
        console.log(toDimArray[i][j]);
    }
}

var array = [["Magnus", 18], ["Eksaminator", 30], ["Sensor", 30]];

for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < 2; j++) {
        console.log(array[i][j]);
    }
}
for(var i = 0; i < array.length; i++) {
    console.log(array[i][0] + " er " + array[i][1] + " år!");
}